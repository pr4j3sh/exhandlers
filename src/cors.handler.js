const cors = require("cors");

const corsHandler = (allowedOrigins = "*", args = {}) => {
  const options = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins === "*") {
        callback(null, true);
      } else {
        const origins = allowedOrigins ? allowedOrigins.split(",") : [];

        if (!origin || origins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Origin not allowed"));
        }
      }
    },
    ...args,
  };
  return cors(options);
};

module.exports = { corsHandler };
