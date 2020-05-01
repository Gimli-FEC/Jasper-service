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

const getDetails = (id, callback) => {
  connection.query(`SELECT details FROM games where id="${id}"`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const getScreenshots = (id, callback) => {
  connection.query(`SELECT link FROM screenshots WHERE game_id="${id}";`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

const getVideos = (id, callback) => {
  connection.query(`SELECT link FROM videos WHERE game_id="${id}";`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports = {
  connection,
  getDetails,
  getScreenshots,
  getVideos
}