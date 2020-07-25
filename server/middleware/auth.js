const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next ) => {
  console.dir('헤더',req.header.authorization)//아무 값도 안 나오고 있음
  try{ 
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decode된 토큰',decodedToken)//아예  언급이 안 되고 있음
    const user_id = decodedToken.user_id;
    if(req.body.user_id && req.body.user_id !== user_id){
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json(
     'Invalid jwt'
    )
  }
}