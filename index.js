const asyncHandler = require("./src/async.handler");
const corsHandler = require("./src/cors.handler");
const errorHandler = require("./src/error.handler");
const logHandler = require("./src/log.handler");
const mongoHandler = require("./src/mongo.handler");
const notFoundHandler = require("./src/notFound.handler");
const { passwordHandler, hashHandler } = require("./src/password.handler");
const { postgresHandler, initPostgres } = require("./src/postgres.handler");
const redisHandler = require("./src/redis.handler");

module.exports = {
  asyncHandler,
  errorHandler,
  corsHandler,
  logHandler,
  notFoundHandler,
  hashHandler,
  passwordHandler,
  mongoHandler,
  initPostgres,
  postgresHandler,
  redisHandler,
};
