require('dotenv').config();

const { Pool } = require('pg');


const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error al conectar a PostgreSQL', err.stack);
    process.exit(1);
  }
  console.log('Conexión a PostgreSQL exitosa');
});

module.exports = pool;
