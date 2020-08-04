const { bookmarks, cafes} = require('../../models');

module.exports = {
  get:(req,res) => {
  bookmarks
  .findAll({
    where: { user_id: req.user.id }
  })
  .then((data)=> {
    let cafe = [];
    let id = [];
    for(let i = 0; i < data.length; i++){
      cafe.push(data[i].dataValues.cafe_id);
      id.push(data[i].dataValues.id);
    }
    let bookmark_cafe = {'cafe_id': cafe};
    let bookmark_id = {'bookmark_id': id}
    totalData = Object.assign({}, bookmark_id, bookmark_cafe);

    res.status(200).json(totalData);//북마크 테이블의 id와 cafe_id를 함께 받을 수 있도록 수정 완료
    })
  .catch(err => {
    res.status(400).json(err); 
  })
  }
}
  


