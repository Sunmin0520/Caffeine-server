const { reviews } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let user_id = jwt.verify(token, process.env.JWT_SECRET).id;
      let cafe_id = req.params.cafe_id;
      let text = req.body.text;
      let rating = req.body.rating;

      reviews
      .create({
        user_id: user_id,
        cafe_id: cafe_id,
        text: text,
        rating: rating
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      })
    }
  }
}