const { reviews } = require('../../models');

module.exports = {
  post: (req,res) => {
    let user_id = req.user.id;
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