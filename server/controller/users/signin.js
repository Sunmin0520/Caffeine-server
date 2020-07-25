const { users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res) => {
    const { email, password } = req.body;
    console.log(email, password);
    users
    .findOne({ where: { email: email }})
    .then(user => {
      if(user){
        console.log('유저',user)
        if(user.dataValues.password === password){
          let payload = {id: user.id};
          let secret = process.env.JWT_SECRET;
          jwt.sign(payload, secret, {expiresIn:'24h'},(err,token) => {
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

