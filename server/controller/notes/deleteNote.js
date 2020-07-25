const { notes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  delete: (req,res) => {
    let token = req.cookies.token;
    if(!token){//미들웨어 만들어서 바꾸기
      res.status(401).json({result:"token expired"});
    } else {
      let note_id = req.params.note_id

      notes
      .findOne({
        where: { 
          id: note_id
        }
      })
      .then((data) => {
        if(data){
          notes
          .destroy({
            where: { 
              id:note_id
            }
          })
          .then(() => {
            res.status(200).json({ result: 'note deleted'})
          })
        } else {
          res.status(404).json({ result: 'cannot found note'});
        }
      })
    }
  }
}
