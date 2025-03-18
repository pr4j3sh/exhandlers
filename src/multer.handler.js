const multer = require("multer");

/**
 * Creates a Multer instance for handling file uploads.
 *
 * @function uploadHandler
 * @param {Object} [config={}] - Multer configuration options.
 *   See the official multer package documentation for more details:
 *   @see {@link https://www.npmjs.com/package/multer}
 *
 * @returns {multer.Multer} Configured Multer instance.
 *
 * @example
 * const upload = uploadHandler({ dest: "uploads/" });
 * app.post("/upload", upload.single("file"), (req, res) => {
 *   res.json({ file: req.file });
 * });
 */
const uploadHandler = (config = {}) => {
  const upload = multer(config);
  return upload;
};

module.exports = { uploadHandler };
