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
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  }
}