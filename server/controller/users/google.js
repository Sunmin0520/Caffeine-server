const { createGoogleUser, findGoogleUser } = require('../../utils');
const { users } = require('../../models');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = {
  post: async (req, res) => {
    try {
      const {  } = req.body;
      const verify = async () => {
        try {
          const ticket = await client.verifyIdToken({
            idToken: req.body.idToken,
          });
          const payload = ticket.getPayload();
          const email = payload.email;

          const findUser = await users.findAll({ where: { email: email } });
          let token = '';
          if (findUser.length === 0) {
            token = await createGoogleUser(payload);//이메일이 안 찾아진다 -> 이전에 로그인한 적 없다 -> 정보를 db에 저장
          } else {
            token = await findGoogleUser(payload);//이메일이 찾아진다 -> db와 비교
          }
          return res.status(201).json({
            user_id: findUser.dataValues.id,
            token: token,
            isOauth: 1,
            autoLogin: 0,
          });
        } catch (err) {
          res.status(400).send('로그인을 해주세요.');
        }
      };
      verify();
    } catch(err) {
      res.status(400).send('로그인을 해주세요.');
    }
  },
};