const { notes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let note_id = req.params.note_id//엔드포인트는 서버/notes/${note_id}

      notes
      .findOne({
        where: { 
          id: note_id
        }
      })
      .then((data) => 
        res.status(200).json(data))
    }
  }
}