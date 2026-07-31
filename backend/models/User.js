import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ 
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        default: "",
    },

},    {timestamps: true,},);

const User = mongoose.model("user", userSchema);
export default User;