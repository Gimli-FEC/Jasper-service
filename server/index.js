const express = require('express');
const app = express();
const port = 3002;



const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const AWSkeys = require('./config.js');
var s3 = new AWS.S3();

app.use(express.static('public'));

app.get('/test', (req, res) => {
  AWS.config.update({
    accessKeyId: AWSkeys.Access_Key_ID,
    secretAccessKey: AWSkeys.Secret_Access_Key,
    region: 'us-east-2'
  });

  var params = {
    Bucket: 'fecpictures',
    Prefix: 'pics'
  };

  s3.listObjects(params, (err, data) => {
    if (err) {
       console.log(err, err.stack); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
})

app.listen(port, () => console.log(`listening on port ${port}!!!!!!!!!!!`));