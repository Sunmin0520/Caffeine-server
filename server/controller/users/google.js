const { users } = require('../../models');
const { OAuth2Client } = require('google-auth-library');
const { addOauthToken, updateToken } = require('../../modules');
require('dotenv').config();
const client = new OAuth2Client(process.env.GOOGLE_SECRET);

module.exports = {
  post: async (req, res) => {
    try {
      const {  } = req.body;
      const verify = async () => {
        try {
          const ticket = await client.verifyIdToken({
            idToken: token,
          });
          const payload = ticket.getPayload();
          const email = payload.email;

          const findEmail = await users.findAll({ where: { email: email } });
          let token = '';
          if (findEmail.length === 0) {
            token = await addOauthToken(payload);//이메일이 안 찾아진다 -> 이전에 로그인한 적 없다 -> 정보를 db에 저장
          } else {
            token = await updateToken(payload);
          }
          return res.status(200).json({
            user_id: findEmail.dataValues.id,
            token: token,
            isOauth: 1,
            autoLogin: 0,
          });
        } catch (err) {
          res.status(400).send('로그인을 해주세요.');
        }
      };
      verify();
    } catch {
      res.status(400).send('로그인을 해주세요.');
    }
  },
};