const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(cors());
const usersInRooms = {};

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Clientlar ulanishi uchun socket hodisalarini sozlash
io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  socket.on("createRoom", ({ roomID, name }) => {
    socket.join(roomID);
    console.log(`Room ${roomID} created and joined by ${name}`);
    usersInRooms[roomID] = usersInRooms[roomID] || [];
    usersInRooms[roomID].push({ id: socket.id, name });
    console.log(`Users in Room ${roomID}:`, usersInRooms[roomID]);
  });

  socket.on("joinRoom", ({ roomID, name }) => {
    socket.join(roomID);
    console.log(`${name} joined Room ${roomID}`);
    usersInRooms[roomID] = usersInRooms[roomID] || [];
    usersInRooms[roomID].push({ id: socket.id, name });
    console.log(`Users in Room ${roomID}:`, usersInRooms[roomID]);
    socket.to(roomID).emit("userJoined", socket.id);
  });
  socket.on("getUsers", (roomID, callback) => {
    const users = usersInRooms[roomID] || [];
    callback(users);
  });
  // Call hodisasi
  socket.on("callUser", ({ roomID, signalData, from, name }) => {
    socket.to(roomID).emit("callUser", { signal: signalData, from, name });
  });
  socket.on("sendMessage", ({ message, roomId }) => {
    io.to(roomId).emit("receiveMessage", { message, userId: socket.id });
  });
  // Call ga javob berish
  socket.on("answerCall", ({ roomID, signalData }) => {
    socket
      .to(roomID)
      .emit("callAccepted", { signal: signalData, id: socket.id });
  });

  // Disconnect hodisasi
  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
    io.emit("callEnded", socket.id);
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
