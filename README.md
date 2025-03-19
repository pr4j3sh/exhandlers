# exhandlers

`exhandlers` is a comprehensive collection of middleware and handler functions designed to streamline backend development in Express.js. It provides pre-built utilities for handling databases, WebSocket connections, AMQP connections, logging, and various other essential middleware functionalities.

By integrating `exhandlers`, developers can eliminate the need to write common handlers from scratch, thereby reducing development overhead and ensuring a cleaner, more maintainable codebase.

## Documentation

[exhandlers Documentation](https://pr4j3sh.github.io/exhandlers/)

## Available Handlers

### Core Middleware

- **Asynchronous Handler** – Simplifies error handling in async functions.
- **Authentication Handler** – Manages authentication and authorization mechanisms.
- **CORS Handler** – Configures Cross-Origin Resource Sharing (CORS) policies.
- **Error Handler** – Centralized error handling middleware.
- **Not Found Handler** – Handles 404 (Not Found) errors.
- **Logs Handler** – Structured logging for application monitoring.
- **Rate Limiting Handler** – Protects APIs from excessive requests.
- **Password Handler** – Utility functions for password hashing and validation.

### Database Handlers

- **MongoDB Handler** – Provides a streamlined connection and query interface for MongoDB.
- **PostgreSQL Handler** – Manages PostgreSQL database connections and queries.
- **Redis Handler** – Integrates Redis for caching and session management.

### Additional Handlers

- **Upload Handler** – Manages file uploads efficiently.
- **Socket Handler** – Handles WebSocket connections for real-time data exchange.
- **AMQP Handler** – Facilitates message queue communication using AMQP (e.g., RabbitMQ).

## Installation

To integrate `exhandlers` into your project, install the package using npm:

```sh
npm install exhandlers
```

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

## License

This project is licensed under the MIT License.
