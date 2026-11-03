const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tpg118539@#&',
  database: 'petcare'
});

module.exports = connection;
