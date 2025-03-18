/**
 * Express error-handling middleware.
 *
 * @function errorHandler
 * @param {Object} err - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next function.
 *
 * @description Logs the error stack and sends a JSON response with the error message and status code.
 *   See the official express package documentation for more details:
 *   @see {@link https://expressjs.com/en/guide/error-handling.html}
 *
 * @example
 * const app = express();
 * app.use(errorHandler);
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const status = err.status || 500;
  const message = err.message || "Internal server error";

  res.status(status).json({
    success: false,
    message,
  });
};

module.exports = { errorHandler };
