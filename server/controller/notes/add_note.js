const { notes } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = {
  post: (req,res) => {
    let token = req.cookies.token;
    if(!token){
      res.status(401).json({result:"token expired"});
    } else {
      let userId = jwt.verify(token, process.env.JWT_SECRET).id;

      let name = req.body.name;
      let origin = req.body.origin;
      let mall = req.body.mall;
      let price = req.body.price;
      let feature = req.body.feature;
      let rating = req.body.rating;
      
      notes
      .create({
        user_id: userId,
        name: name,
        origin: origin,
        mall: mall,
        price: price,
        feature: feature,
        rating: rating
      })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(400).send(err);
      })
    }
  }
}