const { asyncHandler } = require("./src/async.handler");
const { authenticationHandler } = require("./src/authentication.handler");
const { corsHandler } = require("./src/cors.handler");
const { errorHandler } = require("./src/error.handler");
const {
  transports,
  initLogger,
  streamHandler,
  logHandler,
} = require("./src/log.handler");
const { mongoHandler } = require("./src/mongo.handler");
const { uploadHandler } = require("./src/multer.handler");
const { notFoundHandler } = require("./src/notFound.handler");
const { hashHandler, passwordHandler } = require("./src/password.handler");
const { initPostgres, postgresHandler } = require("./src/postgres.handler");
const { queueHandler } = require("./src/queue.handler");
const { rateLimitHandler } = require("./src/rateLimit.handler");
const { initRedis } = require("./src/redis.handler");
const { socketHandler } = require("./src/socket.handler");

module.exports = {
  asyncHandler,
  authenticationHandler,
  corsHandler,
  errorHandler,
  transports,
  initLogger,
  streamHandler,
  logHandler,
  mongoHandler,
  uploadHandler,
  notFoundHandler,
  hashHandler,
  passwordHandler,
  initPostgres,
  postgresHandler,
  queueHandler,
  rateLimitHandler,
  initRedis,
  socketHandler,
};
