const { notes, notes_flavors } = require('../../models');

module.exports = {
  get: (req, res) => {
      let note_id = req.params.note_id;

      notes
      .findOne({
        where: { 
          id: note_id
        }
      })
      .then((data) => {
        let noteData = data.dataValues;

      notes_flavors
      .findAll({
        where: {
          note_id: note_id
        }
      })
      .then((data2) => {
      let flavor = [];
      for(let i=0; i < data2.length; i++){
        if(!(data2[i].dataValues.flavor_id)){
          flavor.push(0)
        }
        flavor.push(data2[i].dataValues.flavor_id);
      }

      let flavorData = { 'flavor': flavor };
      totalData = Object.assign({}, noteData, flavorData);
      })
      .then(() => {
        res.status(200).json(totalData);
      })
      .catch((err) => 
        res.status(422).json({ result: 'cannot found note' }));
      })
    }
}