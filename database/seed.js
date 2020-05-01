const faker = require('faker');
const db = require('./index.js');

for (var i = 0; i < 100; i++) {
  var details = faker.lorem.sentences(Math.floor(Math.random() * 20) + 5);
  db.connection.query(`INSERT INTO games (details) VALUES("${details}");`, (err, results) => {
    if (err) {
      console.error(err);
    }
  })
}

for (var i = 1; i <= 100; i++) {

  var random = Math.floor(Math.random() * 9) + 1;
  var urlIndex = i;
  for (var j = 1; j <= random; j++) {
    if (urlIndex > 100) urlIndex = 100;
    var url = `https://fecpictures.s3.us-east-2.amazonaws.com/pics/${urlIndex}.jpg`;
    db.connection.query(`INSERT INTO screenshots (link, game_id) VALUES("${url}", "${i}");`, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    });
    urlIndex++
  }
}

for (var i = 1; i <= 100; i++) {
  var random = Math.floor(Math.random() * 9) + 1;
  var urlIndex = i;
  for (var j = 1; j <= random; j++) {
    var url = `http://mityurl.com/y/wE2O/r`;
    db.connection.query(`INSERT INTO videos (link, game_id) VALUES("${url}", "${i}");`, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    });
  }
}