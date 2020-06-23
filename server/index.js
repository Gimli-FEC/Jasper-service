const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const compression = require('compression');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors({
  origin: `http//localhost:${port}`,
}));

app.use(compression());

app.use(express.static('./public'));



app.get('/games/:id', (req, res) => {
  const data = {
    screenshots: [],
    videos: [],
  };
  db.getDetails(req.params.id, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      data.details = results[0];
      db.getScreenshots(req.params.id, (err2, results2) => {
        if (err2) {
          console.error(err2);
        } else {
          results2.forEach((obj) => data.screenshots.push(obj));
          db.getVideos(req.params.id, (err3, results3) => {
            if (err3) {
              console.error(err3);
            } else {
              results3.forEach((obj) => data.videos.push(obj));
              res.send(data);
            }
          });
        }
      });
    }
  });
});


/* comment out this line when testing ===> */ app.listen(port, () => console.log('listening on port 3002!!!!!!!!!!!'));

module.exports = app; // for the test file
