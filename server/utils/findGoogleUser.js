const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../models');

module.exports = {
  findGoogleUser: async (payload) => {
    const { email } = payload;
  
    const findUser = await users.findOne({ where: { email: email } });//db의 유저정보와 비교해서 찾기
  
    let userInfo = { user_id: findUser.dataValues.id, email: email, isOauth: 1 }; 
    let options = { expiresIn: '30d', issuer: 'caffeine' };
  
    userInfo.token = jwt.sign(userInfo, process.env.JWT_SECRET, options);
    return userInfo.token;
  }
}