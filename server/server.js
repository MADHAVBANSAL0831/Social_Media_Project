const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

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