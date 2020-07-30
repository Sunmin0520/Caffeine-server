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
    console.log('유저가 북마크한 cafe_id들',bookmark)/
    res.status(200).json(bookmark);
    
    // for(let j = 0 ; j < bookmark.length; j++){
    //   let cafeData = [];
    //   cafes
    //   .findOne({
    //     where: { 
    //       id: bookmark[j] 
    //     }
    //   })
    //   .then(data1 => {
    //     let cafe = {name: data1.dataValues.name, rate: data1.dataValues.rating_average, region_id:data1.dataValues.region_id};
    //     console.log('카페',cafe)//값이 나오지만 하나의 배열에 들어가지 않아서 res가 안됨
    //   })
    // }
    })
  .catch(err => {
    res.status(400).json(err); 
  })
  }
}
  


