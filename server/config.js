const aws = require('aws-sdk');

let s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET
});

const API_KEY = s3.secretAccessKey;
console.log('API_KEY is', API_KEY)
module.exports = API_KEY;
