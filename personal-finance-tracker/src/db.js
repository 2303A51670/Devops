const mongoose = require("mongoose");

async function connectDB(uri) {
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}

async function disconnectDB() {
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}

module.exports = { connectDB, disconnectDB };