//쿼리파라미터로 쿼리로 보내진 정보에 대해서만 필터링을 한다.
const { notes } = require('../../models');
//const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req,res) => {
    const { note_id } = req.query;

    notes
    .findAll({
      where: { id : note_id },
      include: [{ model: flavors }]
    })
    .then((data) => {
      if(data){//특정 note_id를 가진 한 note에 들어가있는 모든 정보
        const result = {
          id: data.id,
          name: data.name,
          origin: data.origin,
          mall: data.mall,
          price: data.price,
          feature: data.feature,
          rating: data.rating,
          flavors : data.flavors.map((ele) => ele.name)
        }
        res.status(200).json(result);
      } else {
        res.status(403).json({ message: 'unvalid note_id'})
      }
    })
    .catch(err => 
      res.status(400).send(err))
    }
  }

// 토큰으로 유효성 확인 O && flavors부분 X
  // get: (req,res) => {
  //   let token = req.cookies.token;
  //   if(!token){//수정하기
  //     res.status(401).json({result:"token expired"});
  //   } else {
  //     let userId = jwt.verify(token, process.env.JWT_SECRET).id
  //     let noteId = req.query.note_id //클라이언트에서 params로 note_id를 보냄
  //     notes
  //     .findOne({
  //       where: { 
  //         user_id: userId,
  //         id: noteId//notes table의 id와 쿼리로 보내진 내용인 noteId가 일치할 때
  //       }
  //     })
  //     .then(data => {
  //       res.status(200).json(data);
  //     })
  //     .catch(err => {
  //       res.status(400).send(err);
  //     })
  //   }
  // }
