const { bookmarks } = require('../../models');

module.exports = {
  get:(req,res) => {
  bookmarks
  .findAll({
    where: { user_id: req.user.id }
  })
  .then((data)=> {
    let total = [];
    for(let i = 0; i < data.length; i++){
      total.push({cafe_id: data[i].dataValues.cafe_id, bookmark_id:data[i].dataValues.id})
    }
      res.status(200).json(total);
    })
  .catch(err => {
    res.status(404).json({ result: 'cannot found bookmarks' }); 
  })
  }
}
  










