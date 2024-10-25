import express from "express";
import { Server } from "socket.io";

const app = express();

const server = app.listen(8000, () => console.log("Server started on http://localhost:8000"));
const io = new Server(server, { /* options */ });

io.on("connection", (socket) => {
    socket.on("ping", (arg) => {
        console.log(arg);
        socket.emit("ping", arg);
    });
});

// httpServer.listen(3000);