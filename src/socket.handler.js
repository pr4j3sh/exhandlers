const { createServer } = require("node:http");
const { Server } = require("socket.io");

/**
 * Initializes a Socket.IO server with an HTTP server.
 *
 * @function socketHandler
 * @param {Object} app - Express application instance.
 * @param {Object} [config={}] - Socket.IO server configuration options.
 *   See the official socket.io package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/socket.io}
 *
 * @returns {Object} Configured Socket.IO server instance.
 *
 * @example
 * ```js
 * const express = require("express");
 *
 * const app = express();
 * const io = socketHandler(app, { cors: { origin: "*" } });
 *
 * io.on("connection", (socket) => {
 *   console.log("A user connected");
 * });
 */
const socketHandler = (app, config) => {
  const server = createServer(app);
  const io = new Server(server, config);
  return io;
};

module.exports = { socketHandler };
