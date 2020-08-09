const { bookmarks } = require('../../models');

module.exports = {
  post: (req,res) => {
    let user_id = req.user.id;
    let cafe_id = req.params.cafe_id;

    bookmarks
    .create({
      user_id: user_id,
      cafe_id: cafe_id,
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({ result: 'invalid info for saving bookmark' });
    })
  }
}