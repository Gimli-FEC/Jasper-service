
/* This code allows me to use jquery on the server side
--------------------------------------------------------*/
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const jQuery = require('jquery')(window);

const $ = jQuery;
/*-------------------------------------------------------*/

const faker = require('faker');
const db = require('./index.js');
const config = require('./config.js');
console.log(config.API_KEY);

// for (let i = 0; i < 100; i += 1) {
//   const details = faker.lorem.sentences(Math.floor(Math.random() * 20) + 10);
//   db.connection.query(`INSERT INTO games (details) VALUES("${details}");`, (err, results) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(results);
//     }
//   });
// }

// for (let i = 1; i <= 100; i += 1) {
//   const random = Math.floor(Math.random() * 9) + 1;
//   let urlIndex = i;
//   for (let j = 1; j <= random; j += 1) {
//     if (urlIndex > 100) urlIndex = 100;
//     const url = `https://fecpictures.s3.us-east-2.amazonaws.com/pics/${urlIndex}.jpg`;
//     db.connection.query(`INSERT INTO screenshots (link, game_id) VALUES("${url}", "${i}");`, (err, results) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(results);
//       }
//     });
//     urlIndex += 1;
//   }
// }


const vids = [];
$.ajax('https://www.googleapis.com/youtube/v3/videos', {
  method: 'GET',
  data: {
    part: 'snippet',
    key: config.API_KEY,
    chart: 'mostPopular',
    maxResults: 50,
  },
  success: (results) => {
    console.log(results.items[0].snippet.thumbnails.default.url)
    results.items.forEach((item) => vids.push({id: item.id, thumbnail: item.snippet.thumbnails.default.url}));
    for (let i = 1; i <= 100; i += 1) {
      const random = Math.floor(Math.random() * 9) + 1;
      let currentId = i - 1;
      for (let j = 1; j <= random; j += 1) {
        if (currentId >= 50) currentId = 1;
        db.connection.query(`INSERT INTO videos (link, thumbnail, game_id) VALUES("https://www.youtube.com/embed/${vids[currentId].id}", "${vids[currentId].thumbnail}", "${i}");`, (err, results2) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results2);
          }
        });
        console.log(currentId, vids[currentId]);
        currentId += 1;
      }
    }
  },
  error: (err) => console.error(err.responseJSON.error),
});
