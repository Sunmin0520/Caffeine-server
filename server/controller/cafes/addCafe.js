const { cafes } = require('../../models');

module.exports = {
  post: (req,res) => {
    const { name, address, region_id, sell_beans, instagram_account } = req.body;

    cafes
    .findOrCreate({
      where: { address: address},
      defaults: {
        name: name,
        region_id: region_id,
        sell_beans: sell_beans,
        instagram_account: instagram_account
      }
    })
    .then(async([cafe, created]) => {
      if(!created){
        res.status(409).json({ result: "cafe already exists in db" })
      }
      const data = await cafe.get({plain: true});
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  }
}

