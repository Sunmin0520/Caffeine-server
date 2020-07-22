const { notes } = require('../../models');
require('dotenv').config();

//다른 파일들과 다르게 delete부터는 token 관련 내용을 뻈다. 
//토큰의 유효성 확인을 notes의 controller에서도 추가해야하는지에 대해 다시 한번 생각 후 add,modify,notelist,note 코드 정리할 것

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
