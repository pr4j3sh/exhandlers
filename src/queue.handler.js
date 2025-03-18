const amqplib = require("amqplib");
const { exit } = require("process");

/**
 * Establishes a connection to a RabbitMQ server.
 *
 * @async
 * @function queueHandler
 * @param {string} uri - The AMQP server connection URI.
 * @returns {Promise<Object>} Resolves to a RabbitMQ connection instance.
 *   See the official amqplib package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/amqplib}
 *
 * @throws Will log an error and exit the process if the connection fails.
 *
 * @example
 * const conn = await queueHandler("amqp://localhost");
 * const channel = await conn.createChannel();
 */
const queueHandler = async (uri) => {
  try {
    const conn = await amqplib.connect(uri);
    return conn;
  } catch (error) {
    console.error(error);
    exit(1);
  }
};

module.exports = { queueHandler };
