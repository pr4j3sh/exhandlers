const cors = require("cors");

const corsHandler = (allowedOrigins) => {
  const options = {
    origin: (origin, callback) => {
      const allowedOrigins = process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(",")
        : [];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed"));
      }
    },
  };
  return cors(options);
};

module.exports = corsHandler;
