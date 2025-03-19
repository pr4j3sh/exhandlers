const cors = require("cors");

/**
 * Middleware to handle Cross-Origin Resource Sharing (CORS).
 *
 * @function corsHandler
 * @param {string} [allowedOrigins="*"] - Comma-separated list of allowed origins or "*" for all origins.
 * @param {Object} [config={}] - Additional configuration options for CORS (excluding `origin`).
 *   See the official CORS package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/cors}
 * @returns {Function} Express middleware function to handle CORS requests.
 *
 * @example
 * ```js
 * const express = require("express");
 *
 * const app = express();
 * app.use(corsHandler("https://example.com,https://another.com", { optionsSuccessStatus: 200 }));
 *
 * app.get("/", (req, res) => {
 *   res.json({ message: "CORS enabled" });
 * });
 * ```
 */
const corsHandler = (allowedOrigins = "*", config = {}) => {
  const options = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins === "*") {
        callback(null, true);
      } else {
        const origins = allowedOrigins ? allowedOrigins.split(",") : [];

        if (!origin || origins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Origin not allowed"));
        }
      }
    },
    ...config,
  };
  return cors(options);
};

module.exports = { corsHandler };
