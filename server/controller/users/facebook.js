const { users } = require('../../models');
const { findGoogleUser } = require('../../utils');

module.exports = {
  post: (req, res) => {
    const { email } = req.body;
    
    users
      .findOrCreate({
        where: {
          email: email
        }
      })
      .then(async ([user, created]) => {
        if (created) {
          const data = await user.get({ plain: true });
          const userInfo = findGoogleUser({ ...data, isOauth: 1 });
          
          res.status(200).cookie('token', userInfo)
          .json({
            userId: data.id,
            email: data.email,
            isOauth: 1,
            autoLogin: 0,
          });
        } else {
          const totalData = { ...user.dataValues, isOauth: 1 };
          const userInfo = findGoogleUser(totalData);
          res.status(201).cookie('token', userInfo)
          .json({
            userId: user.dataValues.id,
            email: totalData.email,
            isOauth: 1,
            autoLogin: 0,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send('please_signin');
      });
  },
};