const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

var API_KEY = s3.secretAccessKey;
module.exports = API_KEY;
