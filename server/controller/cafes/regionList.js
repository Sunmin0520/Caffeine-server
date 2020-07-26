const { regions } = require('../../models');
const jwt = require('jsonwebtoken');;
require('dotenv').config();

module.exports = {
  get: (req,res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      regions
      .findAll()
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
    } 
  }
}