const jwt = require("jsonwebtoken");

/**
 * @function tokenHandler
 * @description Asynchronously generates a JSON Web Token (JWT).
 *   See the official jsonwebtoken package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/jsonwebtoken}
 *
 * @param {Object} payload - The payload to encode in the token.
 * @param {string} secret - The secret key used to sign the token.
 * @param {Object} [args={}] - Additional options for the JWT (e.g., expiresIn).
 * @returns {Promise<string>} A promise that resolves to the generated JWT.
 *
 * @example
 * ```js
 * const token = await tokenHandler({ userId: 123 }, "mySecret", { expiresIn: "1h" });
 * ```
 */
const tokenHandler = async (payload = {}, secret, args = {}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, args, (err, token) => {
      if (err) reject(err);
      else resolve(token);
    });
  });
};

module.exports = { tokenHandler };
