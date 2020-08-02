const { users } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  addOauthToken: async (payload) => {
    const { email } = payload;
  
    const createUser = await users.create({ email: email });
    let userInfo = { id: createUser.dataValues.id, email, isOauth: 1 };
    let options = { expiresIn: '24h', issuer: 'caffeine' };
  
    userInfo.token = jwt.sign(userInfo, process.env.JWT_SECRET, options);
    return userInfo;
  }
}