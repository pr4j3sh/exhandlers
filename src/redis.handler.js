const { exit } = require("process");
const { createClient } = require("redis");

/**
 * Initializes a Redis client using the `redis` package.
 *
 * @function initRedis
 * @param {Object} config - Redis configuration options.
 *   See the official redis package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/redis}
 *
 * @param {string} config.url - Redis connection URL.
 * @returns {Object} Redis client instance.
 *
 * @throws Will log an error and exit the process if the Redis URL is missing or the connection fails.
 *
 * @example
 * ```js
 * const redisClient = initRedis({ url: "redis://localhost:6379" });
 * ```
 */
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
