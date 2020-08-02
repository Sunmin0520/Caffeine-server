const { notes } = require('../../models');

module.exports = {
  delete: (req,res) => {
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