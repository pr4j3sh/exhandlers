const { exit } = require("process");
const { createClient } = require("redis");

function redisHandler(uri) {
  if (!uri) {
    console.error("URI not found");
    exit(1);
  }
  const client = createClient({ url: uri });
  console.log("connected to redis");
  return client;
}

module.exports = redisHandler;
