const { pool } = require('./db.js');

const postReview = async (body) => {
  const queryString = `
  INSERT INTO reviews(product_id, product_photo, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase)
  VALUES ($1, $2, (SELECT id FROM users WHERE users.user_name = $3 limit 1), $4, $5, $6, $7, $8, $9);`;
  const {
    product_id, user_name, overall_rating, review_date,
    headline, full_text, helpful, verified_purchase, product_photo,
  } = body;

  const params = [
    product_id, product_photo, user_name, overall_rating,
    review_date, headline, full_text, helpful, verified_purchase,
  ];

  let response;
  try {
    response = await pool.query(queryString, params);
  } catch (e) {
    throw (e);
  }
  return response;
};

module.exports = {
  postReview,
}
