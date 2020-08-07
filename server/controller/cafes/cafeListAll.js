//지역관계없이 모든 카페 데이터
const { cafes } = require('../../models');

module.exports = {
  get: (req, res) => {

    cafes
    .findAll()
    .then((data) => {
    console.log('데이터',data)
      res.status(200).json(data)
    })
    .catch((err) => 
      res.status(404).send(err));
  }
}