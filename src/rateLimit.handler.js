const rateLimit = require("express-rate-limit");

/**
 * Creates an Express middleware for rate limiting.
 *
 * @function rateLimitHandler
 * @param {Object} config - Configuration options for rate limiting.
 * @returns {Function} Express middleware for rate limiting.
 *
 * @example
 * const express = require("express");
 *
 * const app = express();
 * app.use(rateLimitHandler({ windowMs: 15 * 60 * 1000, limit: 100 }));
 */
const rateLimitHandler = (config) => {
  const limiter = rateLimit(config);
  return limiter;
};

module.exports = { rateLimitHandler };
