---
title: Getting Started
id: getting-started
slug: /getting-started
---

# Getting Started

`exhandlers` is a comprehensive collection of middleware and handler functions designed to streamline backend development in Express.js. It provides pre-built utilities for handling databases, WebSocket connections, AMQP connections, logging, and various other essential middleware functionalities.

By integrating `exhandlers`, developers can eliminate the need to write common handlers from scratch, thereby reducing development overhead and ensuring a cleaner, more maintainable codebase.

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
- **Token Handler** – Utility function for password hashing and validation.

### Database Handlers

- **MongoDB Handler** – Provides a streamlined connection and query interface for MongoDB.
- **PostgreSQL Handler** – Manages PostgreSQL database connections and queries.
- **Redis Handler** – Integrates Redis for caching and session management.

### Additional Handlers

- **Upload Handler** – Manages file uploads efficiently.
- **Socket Handler** – Handles WebSocket connections for real-time data exchange.
- **AMQP Handler** – Facilitates message queue communication using AMQP (e.g., RabbitMQ).

> View [API Reference](https://pr4j3sh.github.io/exhandlers/docs/api/asyncHandler) of all handlers to know their usage.
