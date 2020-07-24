const { user } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//자동 및 소셜로그인 구현, 추가 예정
module.exports = {
  post: (req,res) => {
    const { email, password } = req.body;

    user
    .findOne({ where: { email: email }})
    .then(user => {
      if(user){
        if(user.dataValues.password === password){//db에 저장된 password = 유저가 입력한 password 일 때
          let payload = {id: user.id};
          let secret = process.env.JWT_SECRET;
          jwt.sign(payload, secret, {expiresIn:'2h'},(err,token) => {
            if(err){
              res.status(500).send(err);
            } else {
              res.cookie('token',token);
              res.status(201).json(user.dataValues)
            }
          }) 
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