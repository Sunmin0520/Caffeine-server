const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../models');

module.exports = {
  createGoogleUser: async (payload) => {
    const { email } = payload;
  
    const createUser = await users.create({ email: email });//처음 구글 로그인 하는 경우 create로 db에 정보 저장
    let userInfo = { id: createUser.dataValues.id, email:email, isOauth: 1 };
    let options = { expiresIn: '30d', issuer: 'caffeine' };
  
    userInfo.token = jwt.sign(userInfo, process.env.JWT_SECRET, options);
    return userInfo.token;
  }
}