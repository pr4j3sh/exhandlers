# Express Handlers

> Utility Middlewares for working with ExpressJs

A simple middleware package for Express applications.

## Handlers

- [Async Handler](#async-handler)
- [Error Handler](#error-handler)

## Installation

You can install **exhandlers** using npm:

```bash
npm install exhandlers
```

## Usage

### Async Handler

The `asyncHandler` function allows you to wrap your async route handlers and automatically catch any errors, passing them to the next middleware.

```javascript
const express = require("express");
const { asyncHandler, errorHandler } = require("exhandlers");

const app = express();

app.get(
  "/api/data",
  asyncHandler(async (req, res) => {
    const data = await fetchData(); // Your async logic here
    res.json(data);
  }),
);
```

### Error Handler

The `errorHandler` function is a simple error middleware that logs the error stack and sends a standardized JSON response.

```javascript
app.use(errorHandler); // Use the error handler at the end of your routes
```

## License

This project is licensed under the MIT License.
