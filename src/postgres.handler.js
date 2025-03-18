const { exit } = require("process");
const { Pool } = require("pg");

/**
 * Initializes a PostgreSQL connection pool using `pg.Pool`.
 *
 * @function initPostgres
 * @param {Object} config - PostgreSQL configuration options.
 *   See the official pg package documentation for more details:
 *   @see {@link https://node-postgres.com/apis/client#new-client}
 *
 * @param {string} config.connectionString - Connection string for PostgreSQL.
 * @returns {Pool} PostgreSQL connection pool instance.
 *
 * @throws Will log an error and exit the process if the connection string is missing or the connection fails.
 *
 * @example
 * const pool = initPostgres({ connectionString: "postgres://user:pass@localhost:5432/mydb" });
 */
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

/**
 * Executes a PostgreSQL query using the provided connection pool.
 *
 * @async
 * @function postgresHandler
 * @param {Pool} pool - PostgreSQL connection pool instance.
 * @param {string} text - SQL query string.
 * @param {Array} [params=[]] - Query parameters.
 * @param {function} [callback] - Optional callback function.
 * @returns {Promise<Object>} Query result object.
 *
 * @example
 * const result = await postgresHandler(pool, "SELECT * FROM users WHERE id = $1", [1]);
 * console.log(result.rows);
 */
async function postgresHandler(pool, text, params, callback) {
  return pool.query(text, params, callback);
}

module.exports = { initPostgres, postgresHandler };
