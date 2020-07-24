const { notes } = require('../../models');
require('dotenv').config();

///토큰 적용시키기
module.exports = {
  delete: (req, res) => { 
    let noteId = req.query.note_id;
    notes
    .findOne({
      id: noteId 
    })
    .then(data => {
      if(data){
        notes.destory({
          where: { id: noteId  }
        })
        .then( () => {
          res.status(200).json({ result: 'note deleted'});
        })
      } else {
        res.status(404).json({ result: 'cannot found note'});
      }
    })
  }
}
