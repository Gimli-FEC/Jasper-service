const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: 'root',
  password: '',
  port: '/var/run/mysqld/mysqld.sock',
  database: 'details',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const getDetails = (id, callback) => {
  connection.query(`SELECT * FROM games where id="${id}"`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getScreenshots = (id, callback) => {
  connection.query(`SELECT * FROM screenshots WHERE game_id="${id}";`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const getVideos = (id, callback) => {
  connection.query(`SELECT * FROM videos WHERE game_id="${id}";`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getDetails,
  getScreenshots,
  getVideos,
};
