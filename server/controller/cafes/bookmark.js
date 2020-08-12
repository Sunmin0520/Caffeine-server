const { bookmarks, cafes} = require('../../models');

module.exports = {
  get:(req,res) => {
  bookmarks
  .findAll({
    where: { user_id: req.user.id }
  })
  .then((data)=> {
    let bookmark = [];
    for(let i = 0; i < data.length; i++){
      bookmark.push(data[i].dataValues.cafe_id)
    }
    console.log('유저가 북마크한 cafe_id들',bookmark)
    res.status(200).json(bookmark);
    })
  .catch(err => {
    res.status(400).json(err); 
  })
  }
}
  


