---
title: Usage
id: usage
slug: /usage
---

# Usage

To use `exhandlers` in your Express application, import the required handlers using `require`.

```js
const {
  asyncHandler,
  errorHandler,
  notFoundHandler,
  corsHandler,
  rateLimitHandler,
} = require("exhandlers");

const express = require("express");

const app = express();

// Apply CORS middleware
app.use(corsHandler());

// Apply rate limiting middleware
app.use(rateLimitHandler({ windowMs: 15 * 60 * 1000, limit: 100 })); // 100 requests per 15 minutes

// Define an asynchronous route using asyncHandler
app.get(
  "/data",
  asyncHandler(async (req, res) => {
    const data = await fetchDataFromDB(); // Simulated database call
    res.json({ success: true, data });
  }),
);

// Handle 404 errors
app.use(notFoundHandler());

// Centralized error handling middleware
app.use(errorHandler());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sample function simulating database fetch
async function fetchDataFromDB() {
  return { message: "Hello from the database!" };
}
```

This setup ensures your Express server is optimized for security, error handling, and performance.
