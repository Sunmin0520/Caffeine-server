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
      const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '24h'});
      res.status(200).json({
        id:user.dataValues.id, token:token
      })
    })
  }}

