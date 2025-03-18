const morgan = require("morgan");
const winston = require("winston");

/**
 * Winston transport configurations for logging.
 * - Console: Logs messages to the console in a formatted manner.
 * - File: Logs messages in JSON format to `logs/server.log`.
 *
 * @constant {winston.transport[]}
 */
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

/**
 * Initializes a Winston logger instance.
 *
 * @function initLogger
 * @param {string} [level="info"] - Logging level (e.g., "info", "error", "debug").
 * @param {winston.transport[]} [transports=[]] - List of Winston transports.
 *   Import the default transports and add your own using spread operator.
 * @param {Object} [config={}] - Additional Winston logger options.
 *   See the official winston package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/winston}
 *
 * @returns {winston.Logger} Configured Winston logger instance.
 *
 * @example
 * const logger = initLogger("info", transports, { format: winston.format.json() });
 * logger.info("Server started");
 */
const initLogger = (level = "info", transports = [], config = {}) => {
  const logger = winston.createLogger({
    level,
    transports,
    ...config,
  });
  return logger;
};

/**
 * Creates a stream handler for integrating Winston with Morgan.
 *
 * @function streamHandler
 * @param {winston.Logger} logger - Winston logger instance.
 * @returns {Object} Stream object for Morgan.
 *
 * @example
 * const logger = initLogger("info", transports);
 * app.use(morgan("combined", { stream: streamHandler(logger) }));
 */
const streamHandler = (logger) => {
  const stream = {
    write: (message) => logger.info(message.trim()),
  };
  return stream;
};

/**
 * Middleware for logging HTTP requests using Morgan.
 *
 * @function logHandler
 * @param {string} [format="combined"] - Morgan logging format.
 * @param {Object} [config={}] - Additional Morgan configuration options.
 *   See the official morgan package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/morgan}
 *
 * @returns {Function} Morgan middleware.
 *
 * @example
 * const logger = initLogger("info", transports);
 * app.use(logHandler("combined", { stream: streamHandler(logger)}));
 */
const logHandler = (format = "combined", config = {}) => {
  return morgan(format, config);
};

module.exports = {
  transports,
  initLogger,
  streamHandler,
  logHandler,
};
