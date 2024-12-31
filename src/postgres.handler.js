const { Pool } = require("pg");

async function postgresHandler(uri) {
  const pool = new Pool({
    connectionString: uri,
  });
  return pool;
}

module.exports = postgresHandler;
