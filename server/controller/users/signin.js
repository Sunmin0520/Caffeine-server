// const { users } = require('../../models');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// module.exports = {
//   post: (req,res) => {
//     const { email, password } = req.body;
//     console.log(email, password);
//     users
//     .findOne({ where: { email: email }})
//     .then(user => {
//       if(user){
//         console.log('유저',user)
//         if(user.dataValues.password === password){
//           let payload = {id: user.id};
//           let secret = process.env.JWT_SECRET;
//           jwt.sign(payload, secret, {expiresIn:'24h'},(err,token) => {
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

const { users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res) => {
    const { email, password } = req.body;
    users
    .findOne({ where: { email: email }})
    .then(user => {
      console.log('유저',user)
      if(!user){
        res.status(401).json({error:'입력된 이메일과 일치하는 사용자 없음'})
      } 
      if(user.dataValues.password !== password){
        res.status(401).json({error:'비밀번호 틀림'})
      }
      let payload = {id: user.dataValues.id, username: user.dataValues.username}
      const token = jwt.sign(payload, 'caffeine', {expiresIn: '24h'});
      res.status(200).json({
        id:user.dataValues.id, token:token
      })
    })
  }}