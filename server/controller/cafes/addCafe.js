const { cafes } = require('../../models');

module.exports = {
  post: (req,res) => {
    let name = req.body.name;
    let address = req.body.address;
    let region_id = req.body.region_id;
    let sell_beans = req.body.sell_beans; // true(1) or false(0)
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
    .catch(err => {
      res.status(404).send(err);
    })        
  }
}