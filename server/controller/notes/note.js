//쿼리파라미터로 쿼리로 보내진 정보에 대해서만 필터링을 한다.
const { notes } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = {
  get: (req,res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let userId = jwt.verify(token, process.env.JWT_SECRET).id
      let noteId = req.query.note_id //클라이언트에서 params로 note_id를 보냄
      notes
      .findOne({
        where: { 
          user_id: userId,
          note_id: noteId//notes table의 note_id와 쿼리로 보내진 내용인 noteId가 일치할 때
        }
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