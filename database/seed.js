const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const jQuery = require('jquery')(window);

const $ = jQuery;


const faker = require('faker');
const db = require('./index.js');
const config = require('./config.js');


for (let i = 0; i < 100; i += 1) {
  const details = faker.lorem.sentences(Math.floor(Math.random() * 20) + 5);
  db.connection.query(`INSERT INTO games (details) VALUES("${details}");`, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  });
}

for (let i = 1; i <= 100; i += 1) {
  const random = Math.floor(Math.random() * 9) + 1;
  let urlIndex = i;
  for (let j = 1; j <= random; j += 1) {
    if (urlIndex > 100) urlIndex = 100;
    const url = `https://fecpictures.s3.us-east-2.amazonaws.com/pics/${urlIndex}.jpg`;
    db.connection.query(`INSERT INTO screenshots (link, game_id) VALUES("${url}", "${i}");`, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    });
    urlIndex += 1;
  }
}


const ids = [];
$.ajax('https://www.googleapis.com/youtube/v3/videos', {
  method: 'GET',
  data: {
    part: 'snippet',
    key: config.API_KEY,
    chart: 'mostPopular',
    maxResults: 50,
  },
  success: (results) => {
    results.items.forEach((item) => ids.push(item.id));
    for (let i = 1; i <= 100; i += 1) {
      const random = Math.floor(Math.random() * 9) + 1;
      let currentId = i - 1;
      for (let j = 1; j <= random; j += 1) {
        if (currentId >= 50) currentId = 1;
        db.connection.query(`INSERT INTO videos (link, game_id) VALUES("https://www.youtube.com/embed/${ids[currentId]}", "${i}");`, (err, results2) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results2);
          }
        });
        console.log(currentId, ids[currentId]);
        currentId += 1;
      }
    }
  },
  error: (err) => console.error(err),
});
