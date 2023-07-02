import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import "./config.js";
import "./db/connection.js";
import ActiveUsers from "./modal/active-users.js";
import routes from "./routes/routes.js";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const io = new Server(server, {
  cors: {
    origin: "https://srijan450.github.io",
    methods: ["GET", "POST"],
  },
});

const options = {
  origin: 'https://srijan450.github.io',
  // origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(options));
app.use(express.json());
app.use(routes);

let counter = 0;

io.on("connection", async (socket) => {
  socket.on("user_verification", async (token) => {
    const res = await ActiveUsers.verifyActive(token);
    if (!res) {
      counter++;
      const newuser = new ActiveUsers({ socketID: socket.id });
      await newuser.save();
      const token = await newuser.generateUniqueIdentifier();
      socket.emit("new-unique-identifier", token);
      io.emit("activeUsers", counter);
    }
  });

  socket.on("send-message", (name, email, subject, message, callback) => {
    console.log(name, email, subject, message);
    callback();
  });

  socket.on("disconnect", async () => {
    const user = await ActiveUsers.findOneAndDelete({ socketID: socket.id });
    if (user) counter === 0 ? counter : counter--;
    io.emit("activeUsers", counter);
  });
});

server.listen(port, () => {
  console.log(`server started at port ${port}`);
});
