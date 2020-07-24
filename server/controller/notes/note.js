//쿼리파라미터로 쿼리로 보내진 정보에 대해서만 필터링을 한다.
const { notes, flavors } = require('../../models');
require('dotenv').config();

module.exports = {
  get: (req,res) => {
    const { notes_id } = req.query;

    notes
    .findAll({
      where: { id : notes_id },
      include: [{ model: flavors }]
    })
    .then((data) => {
      if(data){//특정 note_id를 가진 한 note에 들어가있는 모든 정보
        console.log('데이터',data)//note=1인 것만 잘 나옴!!
        console.log('0번째',data[0])//=dataValues
        console.log('data[0].name',data[0].name)//모카
        const result = {
          id: data[0].id,
          name: data[0].name,
          origin: data[0].origin,
          mall: data[0].mall,
          price: data[0].price,
          feature: data[0].feature,
          rating: data[0].rating,
          flavors : data[0].flavors.map((ele) => ele.name)///다 잘되는데 이건 안 받아와짐!!
        }
        console.log('레절트',result)
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
