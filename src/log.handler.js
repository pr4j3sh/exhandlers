const morgan = require("morgan");

const logHandler = (format, method = {}) => {
  return morgan(format, method);
};
module.exports = logHandler;
