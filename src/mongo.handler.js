const { exit } = require("process");
const mongoose = require("mongoose");

async function mongoHandler(uri) {
  try {
    await mongoose.connect(uri);
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}

module.exports = mongoHandler;
