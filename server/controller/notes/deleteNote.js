const { notes, notes_flavors } = require('../../models');

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
        notes_flavors
        .destroy({
          where: {
            note_id: note_id
          }
        })

        notes
        .destroy({
          where: { 
            id:note_id
          }
        })
        .then(() => {
          res.status(200).json({ result: 'note deleted'});
        })
      } else {
        res.status(422).json({ result: 'cannot found note to delete'});
      }
    })
  }
}
