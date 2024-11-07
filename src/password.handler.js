const bcrypt = require("bcrypt");

const hashHandler = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const passwordHandler = async (password, hashedPassword) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

module.exports = { hashHandler, passwordHandler };
