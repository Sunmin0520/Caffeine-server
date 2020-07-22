const { notes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let userId = jwt.verify(token, process.env.JWT_SECRET).id//이 유저에 해당하는 notes만 가져온다
      notes
      .findAll({
        where: { 
          user_id: userId }//users table의 user_id와 지금 로그인한 유저의 id(userId)가 같을 경우 notes의 모든 자료 find
      })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).send(err);
      })
    }
  }
}