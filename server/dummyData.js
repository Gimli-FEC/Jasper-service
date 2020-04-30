// var download = require('image-downloader');
// var path = require('path');


// for (let i = 1; i < 100; i++) {
//   download.image({url: `https://picsum.photos/1120/630.jpg`, dest: path.resolve(__dirname, './pics', `${i}.jpg`)})
//   .then(({ filename, image }) => {
//     console.log('Saved to', filename)
//   })
//   .catch((err) => console.log(err))
// }


const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const AWSkeys = require('./config.js');
var s3 = new AWS.S3();

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