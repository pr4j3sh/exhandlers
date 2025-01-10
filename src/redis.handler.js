const { exit } = require("process");
const { createClient } = require("redis");

function initRedis(config) {
  if (!config?.url) {
    console.error("redis URI not found");
    exit(1);
  }
  const client = createClient(config);

  client.on("connect", () => {
    console.log("connected to redis");
  });

  client.on("error", (error) => {
    console.error(error.message);
    exit(1);
  });

  return client;
}

module.exports = { initRedis };
