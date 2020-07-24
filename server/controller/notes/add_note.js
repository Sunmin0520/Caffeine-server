const { notes,notes_flavors } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  // postNotesAndFlavors = (t, notes_id, flavors_id) => {//notes_flavors에 새로운 record추가하는 메소드
  //   return new Promise((resolve,reject) => {
  //     notes_flavors
  //     .findOrCreate({
  //       where: {
  //         notes_id: notes_id,
  //         flavors_id: flavors_id
  //       },
  //       transaction: t
  //     })
  //     .spread((result,created) => {
  //       if(!created){
  //         console.log(
  //           `fflavors_id : ${result.flavors_id},notes_id : ${result.notes_id}`
  //         );
  //         return resolve(result);
  //       } else {
  //         return resolve(result);
  //       }
  //     })
  //     .catch(err => {
  //       reject(err);
  //     })
  //   })
  // },

  // postFlavorsForNotes = async(req,res) => {//유저가 새로운 노트를 추가
  //   const { note_id, }
  // },

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