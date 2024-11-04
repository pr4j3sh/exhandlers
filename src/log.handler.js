const logHandler = (req, res, next) => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  console.log(`[${formattedDate}] ${req.method} ${req.url}`);
  next();
};

module.exports = logHandler;
