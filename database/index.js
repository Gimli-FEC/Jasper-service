const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: 'jchauvin',
  password: '',
  port: '/var/run/mysqld/mysqld.sock',
  database: 'details'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});