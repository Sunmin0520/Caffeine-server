const { notes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  put: (req,res) => {
    let token = res.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"})
    } else {
      let userId = jwt.verify(token, process.env.JWT_SECRET).id;
      let noteId = req.query.note_id;

      //작성되어 있던 각 항목의 내용들이 form태그 등의 방법으로 B-1과 동일하게 보여지되 수정 가능한 상태
      //=> 변화 없는 항목은(즉 보여진 부분 중 유저가 수정하지 않은 항목)은 원래 내용 그대로 && 수정한 부분만 update되도록.
      let name = req.body.name;
      let origin = req.body.origin;
      let mall = req.body.mall;
      let price = req.body.price;
      let feature = req.body.feature;
      let rating = req.body.rating;
      notes
      .findOne({
        where: {
          user_id: userId,//req로 받은 해당 유저의 id, 해당 노트의 id가 db에 있는지 확인
          id: noteId 
        }
      })
      .then(data => { 
        if(data){
          notes
          .update({
            name: name,
            origin: origin,
            mall: mall,
            price: price,
            feature: feature,
            rating: rating
          },{ where: { id: noteId }})//동일한 id를 가진 note에 req.body의 내용을 업데이트
        }
      })
      .then((newNote) => {
        res.status(201).json(newNote)//
      })
      .catch(err => {
        res.status(400).send(err);
      })
    }
  }
}