# Express Handlers Documentation

## Handlers

- [Async Handler](#async-handler)
- [CORS Handler](#cors-handler)
- [Error Handler](#error-handler)
- [Log Handler](#log-handler)
- [Not Found Handler](#not-found-handler)

## Usage

### Async Handler

The `asyncHandler` function allows you to wrap your async route handlers and automatically catch any errors, passing them to the next middleware.

```javascript
const express = require("express");
const { asyncHandler } = require("exhandlers");

const app = express();

app.get(
  "/api/data",
  asyncHandler(async (req, res) => {
    const data = await fetchData(); // Your async logic here
    res.json(data);
  }),
);
```

### CORS Handler

A `corsHandler` middleware to handle CORS in your application, allowing requests from specific origins. In a `.env` file put allowed origins as comma separated values in a string variable names `"ALLOWED_ORIGINS"`

```.env
ALLOWED_ORIGINS="http://localhost:5000, http://localhost:8000"
```

```javascript
const { corsHandler } = require("exhandlers");

app.use(corsHandler()); // Put this right after intializing express

// other middlewares and routes
```

### Error Handler

The `errorHandler` function is a simple error middleware that logs the error stack and sends a standardized JSON response.

```javascript
const { errorHandler } = require("exhandlers");

// other routes

app.use(errorHandler); // Use the error handler at the end of your routes, below notFoundHandler
```

### Log Handler

The `logHandler` logs each incoming request's method, URL, and timestamp, making it easy to trace requests in development or production.

```javascript
const { logHandler } = require("exhandlers");

app.use(logHandler); // Use at the beginning of your routes

// other routes

// Example Output: [11/05/2024, 12:51:28] GET /api/data
```

### Not Found Handler

The `notFoundHandler` middleware catches requests to undefined routes and sends a 404 response.

```javascript
const { notFoundHandler } = require("exhandlers");

// other routes

app.use(notFoundHandler); // Place this after all route definitions, above errorHandler
```

> This sends a 404 status with a JSON message like `{ message: "Resource not found" }`.
