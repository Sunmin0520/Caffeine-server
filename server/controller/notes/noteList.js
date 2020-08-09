const { notes } = require('../../models');

module.exports = {
  get: (req,res) => {
      notes
      .findAll({
        where: { 
          user_id: req.user.id
        }
      })
      .then((data) => {
        if(data.length === 0){
          res.status(422).json({ result: 'cannot found notes for the user' });
        }
        res.status(200).json(data);
      })
  }
}