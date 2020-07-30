const { flavors } = require('../../models');

module.exports = {
  get: (req, res) => {
  flavors
  .findAll()
  .then((data) => {
    console.log('데이터',data)
    res.status(200).json(data)
  })
  .catch((err) => {
    res.status(404).send(err);
  })
    
  }
}
