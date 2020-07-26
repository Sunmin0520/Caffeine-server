const { cafes } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let name = req.body.name;
      let address = req.body.address;
      let region_id = req.body.region_id;
      let sell_beans = req.body.sell_beans; // true or false
      let instagram_account = req.body.instagram_account;

      cafes
      .create({
        name: name,
        address: address,
        region_id: region_id,
        sell_beans: sell_beans,
        instagram_account: instagram_account
      })
      .then((data) => {
        res.status(201).json(data);
      })        
    }
  }
}