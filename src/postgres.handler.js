const { exit } = require("process");
const { Pool } = require("pg");

function initPostgres(config) {
  if (!config?.connectionString) {
    console.error("postgres URI not found");
    exit(1);
  }
  const pool = new Pool(config);

  pool
    .connect()
    .then(() => {
      console.log("connected to postgres");
    })
    .catch((error) => {
      console.error(error.message);
      exit(1);
    });

  return pool;
}

async function postgresHandler(pool, text, params, callback) {
  return pool.query(text, params, callback);
}

module.exports = { initPostgres, postgresHandler };
