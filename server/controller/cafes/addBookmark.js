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
      console.log('북마크데이터',data)
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
  }
}