# Express Handlers Documentation

## Handlers

- [Async Handler](#async-handler)
- [CORS Handler](#cors-handler)
- [Error Handler](#error-handler)
- [Log Handler](#log-handler)
- [Not Found Handler](#not-found-handler)
- [Hash Handler](#hash-handler)
- [Password Handler](#password-handler)

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

A `corsHandler` middleware to handle CORS in your application, allowing requests from specific origins. In takes comma separated string of urls

```javascript
const { corsHandler } = require("exhandlers");

app.use(corsHandler("http://localhost:3000, http://127.0.0.1:4321")); // Put this right after intializing express

// other middlewares and routes
```

> Uses [cors](https://www.npmjs.com/package/cors) npm package

### Error Handler

The `errorHandler` function is a simple error middleware that logs the error stack and sends a standardized JSON response.

```javascript
const { errorHandler } = require("exhandlers");

// other routes

app.use(errorHandler); // Use the error handler at the end of your routes, below notFoundHandler
```

### Log Handler

The `logHandler` logs each incoming request's method, URL, and timestamp, making it easy to trace requests in development or production. By default the mode is set to `combined`.

```javascript
const { logHandler } = require("exhandlers");

app.use(logHandler()); // Use at the beginning of your routes

// other routes
```

> Uses [morgan](https://www.npmjs.com/package/morgan) npm package.

### Not Found Handler

The `notFoundHandler` middleware catches requests to undefined routes and sends a 404 response.

```javascript
const { notFoundHandler } = require("exhandlers");

// other routes

app.use(notFoundHandler); // Place this after all route definitions, above errorHandler
```

> This sends a 404 status with a JSON message like `{ message: "Resource not found" }`.

### Hash Handler

This handler is asynchronous and requires `password` as an argument and returns `hashedPassword`

```js
const { hashHandler, asyncHandler } = require("exhandlers");

app.post(
  "/api/auth/register",
  asyncHandler(async (req, res) => {
    const { password } = req.body;

    const hashedPassword = await hashHandler(password);
  }),
);
```

> It uses [bcrypt](https://www.npmjs.com/package/bcrypt) npm package to hash passwords.

### Password Handler

This handler is asynchronous and requires `password` and `hashedPassword` as arguments and returns a boolean `passwordMatch` to check if passwords match.

```js
const { passwordHandler, asyncHandler } = require("exhandlers");
const User = require("path/to/userModel");

app.post(
  "/api/auth/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const hashedPassword = user.password;

    const passwordMatch = await passwordHandler(password, hashedPassword);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }
  }),
);
```

> It uses [bcrypt](https://www.npmjs.com/package/bcrypt) npm package to compare passwords.
