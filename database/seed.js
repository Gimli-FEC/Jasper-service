const faker = require('faker');
const db = require('./index.js');
const config = require('./config.js');

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

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



var ids = [];
$.ajax('https://www.googleapis.com/youtube/v3/videos', {
  method: 'GET',
  data: {
    part: 'snippet',
    key: config.API_KEY,
    chart: 'mostPopular',
    maxResults: 50
  },
  success: results => {
    results.items.forEach(item => ids.push(item.id));
    for (var i = 1; i <= 100; i++) {
      var random = Math.floor(Math.random() * 9) + 1;
      var currentId = i-1;
      for (var j = 1; j <= random; j++) {
        if (currentId >= 50) currentId = 1;
        db.connection.query(`INSERT INTO videos (link, game_id) VALUES("https://www.youtube.com/embed/${ids[currentId]}", "${i}");`, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        });
        console.log(currentId, ids[currentId]);
        currentId++;
      }
    }
  },
  error: err => console.error(err)
  })

