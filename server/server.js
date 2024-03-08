const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");
const cors = require("cors");
const path = require("path");

dotenv.config();

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT;

httpServer.listen(PORT || 4000, () => {
    console.log(`Server started at ${PORT}`);
  });

app.use(express.json());
app.use(cors());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);