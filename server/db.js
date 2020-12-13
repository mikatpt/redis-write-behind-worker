require('dotenv').config();

const redis = require('redis');
const { Pool } = require('pg');

const client = redis.createClient({
  port: 6379,
  host: process.env.REDIS || '127.0.0.1',
});

const config = {
  host: process.env.DBSERVER || 'localhost',
  user: 'student',
  password: 'student',
  port: 5432,
  database: 'amazonreviews',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

module.exports = {
  pool,
  client,
}
