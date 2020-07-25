const { notes,notes_flavors } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  post: (req,res) => {
    let token = req.cookies.token;
    if(!token){//미들웨어 만들어서 바꾸기
      res.status(401).json({result:"token expired"});
    } else {
      let userId = jwt.verify(token, process.env.JWT_SECRET).id;

      let name = req.body.name;
      let origin = req.body.origin;
      let mall = req.body.mall;
      let price = req.body.price;
      let feature = req.body.feature;
      let rating = req.body.rating;
      let flavor = req.body.flavor;

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

        let array=[];
        for(let i=0; i < flavor.length; i++){
          array.push({ note_id:data.dataValues.id, flavor_id:flavor[i]})
        } 
          notes_flavors
          .bulkCreate(
            array
          ,{returning: true}
          )
      })
      .catch(err => {
        res.status(404).send(err);
      })
    }
  },
}

