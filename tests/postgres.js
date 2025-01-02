const { initPostgres } = require("../src/postgres.handler");

const pool = initPostgres("postgres://prajesh@localhost:5432/shorte");
