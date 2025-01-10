# Express Handlers

> Utility Middlewares for working with Express.js

A simple middleware package for Express applications.

## Documentation

[Exhandlers Documentation](/docs/documentation.md)

## Handlers

- Async Handler
- CORS Handler
- Error Handler
- Log Handler
- Not Found Handler
- Hash Handler
- Password Handler
- MongoDB Handler
- Postgres Handler
- Redis Handler

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
  passwordHandler,
  hashHandler,
  mongoHandler,
  initPostgres,
  initRedis,
} = require("exhandlers");
const User = require("path/to/userModel");

const app = express();

// Use CORS handler
app.use(corsHandler("http://localhost:3000, http://127.0.0.1:4321"));

// Use logging middleware
app.use(logHandler());

// Define routes with asyncHandler
app.get(
  "/api/data",
  asyncHandler(async (req, res) => {
    const data = await fetchData(); // Replace with your async logic
    res.json(data);
  }),
);

// Use hashHandler to hash password
app.post(
  "/api/auth/register",
  asyncHandler(async (req, res) => {
    const { password } = req.body;

    const hashedPassword = await hashHandler(password);
  }),
);

// Use passwordHandler to compare passwords
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

// Use Not Found handler for undefined routes
app.use(notFoundHandler);

// Use error handler at the end of the middleware stack
app.use(errorHandler);

const PORT = 3000;

// Use mongoHandler to connect to mongodb database
mongoHandler(
  "mongodb://<username>:<password>@<host>:<port>/<database>?options",
);
// or
// Use initPostgres to connect to postgres database and postgresHandler to make queries
const pool = initPostgres({
  connectionString: "postgres://<user>:<password>@<host>:<port>/<database>",
});

// Use initRedis to connect with redis
const client = initRedis({ url: "redis://<user>:<password>@<host>:<port>" });

app.listen(PORT, async () => {
  console.log(`Server running @ port ${PORT}`);
});
```

## License

This project is licensed under the MIT License.
