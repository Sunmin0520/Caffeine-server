const { bookmarks, cafes} = require('../../models');

module.exports = {
  get:(req,res) => {
  bookmarks
  .findAll({
    where: { user_id: req.user.id }
  })
  .then((data)=> {
    console.log('데이터',data)
    let cafe = [];
    let id = [];
    let total = [];
    for(let i = 0; i < data.length; i++){
      total.push({cafe_id: data[i].dataValues.cafe_id, bookmark_id:data[i].dataValues.id})
      console.log('total',total)
    }
      res.status(200).json(total);
    })
  .catch(err => {
    res.status(400).json(err); 
  })
  }
}
  










