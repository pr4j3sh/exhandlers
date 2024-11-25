const morgan = require("morgan");

const logHandler = (format = "combined", method = {}) => {
  return morgan(format, method);
};
module.exports = logHandler;
