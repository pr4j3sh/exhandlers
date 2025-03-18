/**
 * Middleware to handle 404 (Not Found) errors.
 *
 * @function notFoundHandler
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next function.
 * @returns {void}
 *
 * @description Sends a 404 response when no route matches the request.
 *   See the official express package documentation for more details:
 *   @see {@link https://expressjs.com/en/guide/error-handling.html}
 *
 * @example
 * const app = express();
 * app.use(notFoundHandler);
 */
const notFoundHandler = (req, res, next) => {
  const status = 404;
  const message = "Resource not found";

  res.status(status).json({
    success: false,
    message,
  });
};

module.exports = { notFoundHandler };
