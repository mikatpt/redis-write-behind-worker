require('dotenv').config();
const { promisify } = require('util');

const { client } = require('./db.js');
const { postReview } = require('./models.js');

// Dequeues all POST requests currently in the queue.
const dequeueAll = async () => {
  const multi = client.multi();
  const exec = promisify(multi.exec).bind(multi);
  multi.lrange('reviewqueue', 0, -1);
  multi.del('reviewqueue');

  return await exec();
};

// ALTERNATIVE:
// const posts = await lrange('testqueue', 0, -1);
// await ltrim('testqueue', posts.length, -1)
// return posts;

const post = async () => {
  const queue = await dequeueAll();

  queue[0].forEach(async (item) => {
    const review = JSON.parse(item);
    try {
      await postReview(review);
    } catch (e) {
      console.error(e);
    }
  });
}

// Every second, empty the queue
setInterval(() => post(), 1000);
