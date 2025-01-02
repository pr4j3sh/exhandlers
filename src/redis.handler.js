const { exit, on } = require("process");
const { createClient } = require("redis");

function initRedis(uri) {
  if (!uri) {
    console.error("URI not found");
    exit(1);
  }
  const client = createClient({ url: uri });
  return client;
}

async function redisHandler(client) {
  try {
    await client.connect();
    console.log("connected to redis");
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}

function disconnectRedis(client) {
  on("SIGINT", async () => {
    await client.disconnect();
    console.log("disconnected redis");
    exit(0);
  });
}

module.exports = { initRedis, redisHandler, disconnectRedis };
