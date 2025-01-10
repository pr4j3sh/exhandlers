const { exit } = require("process");
const { createClient } = require("redis");

function initRedis(config) {
  if (!config?.url) {
    console.error("redis URI not found");
    exit(1);
  }
  const client = createClient(config);

  client
    .connect()
    .then(() => console.log("connected to redis"))
    .catch((error) => {
      console.error(error);
      exit(1);
    });

  return client;
}

module.exports = { initRedis };
