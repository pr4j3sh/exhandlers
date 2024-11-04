const notFoundHandler = (req, res, next) => {
  const status = 404;
  const message = "Resource not found";

  res.status(status).json({
    success: false,
    message,
  });
};

module.exports = notFoundHandler;
