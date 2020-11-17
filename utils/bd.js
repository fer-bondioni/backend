const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB_NAME,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    pool: { min: 1, max: 10 },
  },
});

// const knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     pool: { min: 1, max: 10 },
//   },
// });
// referencia de la conexión
module.exports = knex;

//referencia de la conexión
