const { promisify } = require('util');

const { client } = require('./db.js');
const rpush = promisify(client.rpush).bind(client);

const data = {
  "product_id": 999993,
  "user_name": "anonymous",
  "overall_rating": 5,
  "review_date": "2020-05-09 20:59:35.341",
  "headline": "hello world",
  "full_text": "hello hello world",
  "helpful": 22,
  "verified_purchase": true,
  "product_photo": "https://hr-fec.s3.us-east-2.amazonaws.com/random-avatars/brooke-cagle-kvKSL7B6eTo-unsplash.jpg"
}

const seed = async () => {
  const promises = [];
  const info = JSON.stringify(data);
  for (let i = 0; i < 100; i ++) {
    promises.push(rpush('reviewqueue', info))
  }
  return await Promise.all(promises);
}
seed();
