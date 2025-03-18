const jwt = require("jsonwebtoken");

/**
 * Middleware to authenticate requests using a JWT. Checks if "Bearer <token>" is included in authorization header.
 *
 * @function authenticationHandler
 * @param {string} secret - The secret key used to verify the JWT.
 * @returns {Function} Express middleware function that verifies the JWT and sets `req.user`.
 *   See the official jsonwebtoken package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/jsonwebtoken}
 *
 * @example
 * const express = require("express");
 * const { authenticationHandler } = require("./authenticationHandler");
 *
 * const app = express();
 * const SECRET_KEY = "your_secret_key";
 *
 * app.use("/protected", authenticationHandler(SECRET_KEY));
 *
 * app.get("/protected", (req, res) => {
 *   res.json({ message: "Access granted", user: req.user });
 * });
 */
const authenticationHandler = (secret) => {
  return (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }

    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "unauthorized" });
      }
      req.user = payload;
      next();
    });
  };
};

module.exports = { authenticationHandler };
