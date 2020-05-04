const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/games/:id', (req, res) => {
  if (typeof req.params.id !== 'string'){
    res.sendStatus('404');
    return;
  }
  // if (typeof JSON.parse(req.params.id) !== 'number') {
  //   res.sendStatus('404');
  //   return;
  // }
  let data = {
    "screenshots": [],
    "videos": []
  };
  db.getDetails(req.params.id, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results)
      data["details"] = results[0]["details"];
      db.getScreenshots(req.params.id, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          results.forEach(obj => data["screenshots"].push(obj["link"]));
          db.getVideos(req.params.id, (err, results) => {
            if (err) {
              console.error(err);
            } else {
              results.forEach(obj => data["videos"].push(obj["link"]));
              res.send(data);
            }
          });
        }
      });
    }
  });
})




app.listen(port, () => console.log(`listening on port ${port}!!!!!!!!!!!`));