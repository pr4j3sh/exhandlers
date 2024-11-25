const cors = require("cors");

const corsHandler = (allowedOrigins) => {
  const options = {
    origin: (origin, callback) => {
      const origins = allowedOrigins ? allowedOrigins.split(",") : [];

      if (!origin || origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed"));
      }
    },
  };
  return cors(options);
};

module.exports = corsHandler;
