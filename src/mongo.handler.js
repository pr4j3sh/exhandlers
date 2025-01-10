const { exit } = require("process");
const mongoose = require("mongoose");

async function mongoHandler(uri) {
  if (!uri) {
    console.error("mongodb URI not found");
    exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}

module.exports = mongoHandler;
