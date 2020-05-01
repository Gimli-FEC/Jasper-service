const faker = require('faker');
const db = require('./index.js');

for (var i = 1; i < 100; i++) {
  var details = faker.lorem.sentences(Math.floor(Math.random() * 15) + 5);
  console.log(details.length);
  console.log(details)
  db.connection.query(`INSERT INTO games (details) VALUES("${details}");`, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results)
    }
  })
}
