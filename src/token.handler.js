const jwt = require("jsonwebtoken");

/**
 * @function tokenHandler
 * @description Generates a JSON Web Token (JWT).
 *   See the official jsonwebtoken package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/jsonwebtoken}
 *
 * @param {Object} payload - The payload to encode in the token.
 * @param {string} secret - The secret key used to sign the token.
 * @param {Object} [args={}] - Additional options for the JWT (e.g., expiresIn).
 * @returns {string} The generated JWT.
 *
 * @example
 * ```js
 * const { tokenHandler } = require("./tokenHandler");
 * const token = tokenHandler({ userId: 123 }, "mySecret", { expiresIn: "1h" });
 * console.log(token);
 * ```
 */
const tokenHandler = (payload = {}, secret, args = {}) => {
  const token = jwt.sign(payload, secret, args);
  return token;
};

module.exports = { tokenHandler };
