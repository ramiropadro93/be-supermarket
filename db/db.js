require('dotenv').config();

const { Pool } = require('pg');


// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL, // Tu cadena de conexión
//   ssl: {
//     rejectUnauthorized: true, // Esto verifica que el certificado SSL del servidor sea válido
//     sslmode: 'require' // Asegúrate de que la conexión use SSL
//   }
// });

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error al conectar a PostgreSQL', err.stack);
    process.exit(1);
  }
  console.log('Conexión a PostgreSQL exitosa');
});

module.exports = pool;
