const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const users = require("./routes/users");

dotenv.config();

const httpServer = require("http").createServer(app);


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
// app.use(cors());

app.use("/api/users", users);