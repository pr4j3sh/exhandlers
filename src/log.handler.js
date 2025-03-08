const morgan = require("morgan");
const winston = require("winston");

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level.toUpperCase()}: ${message}`;
      }),
    ),
  }),
  new winston.transports.File({
    filename: "logs/server.log",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  }),
];

const initLogger = (level = "info", transports = [], args = {}) => {
  const logger = winston.createLogger({
    level,
    transports,
    ...args,
  });
  return logger;
};

const streamHandler = (logger) => {
  const stream = {
    write: (message) => logger.info(message.trim()),
  };
  return stream;
};

const logHandler = (format = "combined", method = {}) => {
  return morgan(format, method);
};

module.exports = {
  transports,
  initLogger,
  streamHandler,
  logHandler,
};
