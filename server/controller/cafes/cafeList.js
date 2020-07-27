const { cafes } = require('../../models');

module.exports = {
  get: (req, res) => {
    let region_id = req.params.region_id

    cafes
    .findAll({
      where: { 
        region_id: region_id
      }
    })
    .then((data) => 
      res.status(200).json(data))
    .catch((err) => 
      res.status(404).send(err))
  }
}