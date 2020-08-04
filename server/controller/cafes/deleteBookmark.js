const { bookmarks } = require('../../models');

module.exports = {
  delete: (req,res) => {
    let bookmark_id = req.params.bookmark_id;

    bookmarks
    .findOne({
      where: {
        id: bookmark_id
      }
    })
    .then((data) => {
      if(data){
        bookmarks
        .destroy({
          where: {
            id: bookmark_id
          }
        })
        .then(() => {
          res.status(200).json({result: 'bookmark deleted'})
        })
      } else {
        res.status(404).json({ result: 'cannot found bookmark'});
      }
    })
  }
}