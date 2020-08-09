const { flavors } = require('../../models');

module.exports = {
  get: (req, res) => {
    flavors
    .findAll()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(404).json({ result: 'cannot found flavors' });
    })
  }
}
