const bcrypt = require("bcrypt");

/**
 * Hashes a password using bcrypt.
 *
 * @async
 * @function hashHandler
 * @param {string} password - The plaintext password to hash.
 * @returns {Promise<string>} The hashed password.
 *   See the official bcrypt package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/bcrypt}
 *
 * @example
 * const hashedPassword = await hashHandler("mySecurePassword");
 * console.log(hashedPassword);
 */
const hashHandler = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

/**
 * Compares a plaintext password with a hashed password.
 *
 * @async
 * @function passwordHandler
 * @param {string} password - The plaintext password.
 * @param {string} hashedPassword - The hashed password for comparison.
 * @returns {Promise<boolean>} `true` if passwords match, otherwise `false`.
 *   See the official bcrypt package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/bcrypt}
 *
 * @example
 * const isMatch = await passwordHandler("myPassword", storedHashedPassword);
 * if (isMatch) {
 *   console.log("Password is correct");
 * }
 */
const passwordHandler = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

module.exports = { hashHandler, passwordHandler };
