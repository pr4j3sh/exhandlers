# Express Handlers

> Utility Middlewares for working with ExpressJs

A simple middleware package for Express applications.

## Handlers

- Async Handler
- CORS Handler
- Error Handler
- Log Handler
- Not Found Handler

## Installation

You can install **exhandlers** using npm:

```bash
npm install exhandlers
```

## Usage

Contents of your entry point file would look like this

```js
const express = require("express");
const {
  asyncHandler,
  errorHandler,
  logHandler,
  notFoundHandler,
  corsHandler,
} = require("exhandlers");

const app = express();

// Use CORS handler
app.use(corsHandler());

// Use logging middleware
app.use(logHandler);

// Define routes with asyncHandler
app.get(
  "/api/data",
  asyncHandler(async (req, res) => {
    const data = await fetchData(); // Replace with your async logic
    res.json(data);
  }),
);

// Define a test route
app.get("/api/test", (req, res) => {
  res.send("Test route working!");
});

// Use Not Found handler for undefined routes
app.use(notFoundHandler);

// Use error handler at the end of the middleware stack
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```.env
ALLOWED_ORIGINS="http://localhost:5000, http://localhost:8000"
```

> for `corsHandler`

## Documentation

[Read more](/docs/documentation.md)

## License

This project is licensed under the MIT License.
