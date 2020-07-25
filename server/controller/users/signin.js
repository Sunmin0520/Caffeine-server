const { users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    users
    .findOne({ where: { email: email }})
    .then(user => {
      if(user){
        if(user.dataValues.password === password){//db에 저장된 password = 유저가 입력한 password 일 때
          let payload = {id: user.id, username: user.name};//user: email, password 일치 단계 거쳐서 얻은 데이터
          let secret = process.env.JWT_SECRET;
          const token = jwt.sign(payload, secret, {expiresIn: '24h'});
          res.status(200).json({
            id:user.id, token: token
          });
        } 
      } else {
        res.status(404).json({ result:'unvalid user' });//유저가 입력한 email이 db에 없을 때
      }
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
}

//jwt 미들웨어 적용 전
// module.exports = {
//   post: (req,res) => {
//     const { email, password } = req.body;
//     console.log(email, password);
//     users
//     .findOne({ where: { email: email }})
//     .then(user => {
//       if(user){
//         //console.log('유저',user)
//         if(user.dataValues.password === password){//db에 저장된 password = 유저가 입력한 password 일 때
//           let payload = {id: user.id};
//           let secret = process.env.JWT_SECRET;
//           jwt.sign(payload, secret, {expiresIn:'2h'},(err,token) => {
//             if(err){
//               res.status(500).send(err);
//             } else {
//               res.cookie('token',token);
//               res.status(201).json(user.dataValues)
//             }
//           })
//         } 
//       } else {
//         res.status(404).json({ result:'unvalid user' });//유저가 입력한 email이 db에 없을 때
//       }
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     })
//   }
// }