const { exit } = require("process");
const mongoose = require("mongoose");

/**
 * Connects to a MongoDB database using Mongoose.
 *
 * @async
 * @function mongoHandler
 * @param {string} uri - MongoDB connection URI.
 * @param {Object} [config={}] - Additional Mongoose connection options.
 *   See the official mongoose package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/mongoose}
 *
 * @returns {Promise<void>} Resolves when connected, exits process on failure.
 *
 * @throws Will log an error and exit the process if the connection fails.
 *
 * @example
 * ```js
 * mongoHandler("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true });
 * ```
 */
async function mongoHandler(uri, config = {}) {
  if (!uri) {
    console.error("mongodb URI not found");
    exit(1);
  }
  try {
    await mongoose.connect(uri, config);
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error.message);
    exit(1);
  }
}

module.exports = { mongoHandler };
