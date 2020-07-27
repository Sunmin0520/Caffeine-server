const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next ) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    console.log(token)

    jwt.verify(token, process.env.JWT_SECRET , (err, user) => {
      if (err) {
        res.status(401).json({ error: 'Auth Error1 from auth' });
      } else {
        console.log('유저',user)
        req.user = user
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Auth Error2 from auth' });
  }

}