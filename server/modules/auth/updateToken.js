const jwt = require('jsonwebtoken');
require('dotenv').config();
const { users } = require('../../models');

module.exports = {
  updateToken: async (payload) => {
    const { email } = payload;
  
    const findEmail = await users.findOne({ where: { email: email } });
  
    let userInfo = { user_id: findEmail.dataValues.id, email, isOauth: 1 }; 
    let options = { expiresIn: '24h', issuer: 'caffeine' };
  
    userInfo.token = jwt.sign(userInfo, process.env.JWT_SECRET, options);
    return userInfo.token;
  }
}