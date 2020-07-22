// 토큰 없으면 401, 있으면 verify///
// path사용-> 쿼리 쓰기로///
// 전체를 다 불러오고, 그 중 특정 하나만을 필터링한다=> 쿼리파라미터 //원준님, 비해피예시///
// 바로 식별가능하게 => path. 이게 쿼리보다 좀 더 직관적인 느낌은 있는 것 같다
// => 쿼리파라미터 사용하기///
//주소: notes/allNotes ///get
//try,catch try 부분은 굳이 안 쓰고 catch만 써도 될 것 같다.
const { notes } = require('../../models');
const jwt = require('jsonwebtoken');

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