const multer = require("multer");

const uploadHandler = (config = {}) => {
  const upload = multer(config);
  return upload;
};

module.exports = { uploadHandler };
