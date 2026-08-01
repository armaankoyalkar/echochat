import express from "express";
import http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];

const io = new Server(server, {cors: { origin: allowedOrigins, credentials: true }});

function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) userSocketMap[userId] = socket.id;

    io.to.emit("userConnected", Object.keys(userSocketMap));
    
    socket.on("disconnect", () => {
        if (userId) delete userSocketMap[userId];
        io.to.emit("userDisconnected", Object.keys(userSocketMap));
    })

});

export { app, server, io, getReceiverSocketId };