/**
 * Middleware to handle async route errors by passing them to Express error handler.
 *
 * @function asyncHandler
 * @param {Function} fn - The async route handler function.
 * @returns {Function} Express middleware function that catches errors and passes them to `next()`.
 *
 * @example
 * const express = require("express");
 * const { asyncHandler } = require("./asyncHandler");
 *
 * app.get("/example", asyncHandler(async (req, res) => {
 *   const data = await someAsyncOperation();
 *   res.json(data);
 * }));
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = { asyncHandler };
