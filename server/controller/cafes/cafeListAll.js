const { cafes } = require('../../models');

module.exports = {
  get: (req, res) => {

    cafes
    .findAll()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => 
      res.status(404).json({ result: 'cannot found cafes' }));
  }
}