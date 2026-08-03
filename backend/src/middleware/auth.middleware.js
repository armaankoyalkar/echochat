import { getAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export async function protectAuth(req, res, next) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        let user = await User.findOne({ clerkId: userId });

        if (!user) {
            // No webhook has synced this account yet (e.g. local dev with no
            // tunnel) — pull the profile straight from Clerk and create it now.
            const clerkUser = await clerkClient.users.getUser(userId);

            const email =
                clerkUser.emailAddresses.find((e) => e.id === clerkUser.primaryEmailAddressId)
                    ?.emailAddress ?? clerkUser.emailAddresses[0]?.emailAddress;

            const fullName =
                [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
                clerkUser.username ||
                email?.split("@")[0];

            user = await User.create({
                clerkId: clerkUser.id,
                email,
                fullName,
                profileImage: clerkUser.imageUrl,
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectAuth middleware:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}