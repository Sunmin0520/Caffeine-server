const { cafes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  get: (req, res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
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
}