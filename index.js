const asyncHandler = require("./src/async.handler");
const corsHandler = require("./src/cors.handler");
const errorHandler = require("./src/error.handler");
const logHandler = require("./src/log.handler");
const mongoHandler = require("./src/mongo.handler");
const postgresHandler = require("./src/postgres.handler");
const notFoundHandler = require("./src/notFound.handler");
const { passwordHandler, hashHandler } = require("./src/password.handler");

module.exports = {
  asyncHandler,
  errorHandler,
  corsHandler,
  logHandler,
  notFoundHandler,
  hashHandler,
  passwordHandler,
  mongoHandler,
  postgresHandler,
};
