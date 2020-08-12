const { notes,notes_flavors } = require('../../models');

module.exports = {
  put: (req,res) => {
    let note_id = req.params.note_id 

    let name = req.body.name;
    let origin = req.body.origin;
    let mall = req.body.mall;
    let price = req.body.price;
    let feature = req.body.feature;
    let rating = req.body.rating;
    let flavor = req.body.flavor

    notes_flavors
    .findAll({
        where:{ note_id:note_id }
    })
    .then(() =>{
      notes_flavors
      .destroy({ 
        where:{ note_id:note_id },
      })
    })

    notes
    .update({ 
      name: name,
      origin: origin,
      mall: mall,
      price: price,
      feature: feature,
      rating: rating
    },{
      where: { 
        id: note_id,
        user_id:req.user.id
      },
      returning: true,
      plain: true
    })
    .then(()=> {
      res.status(200).json({result: 'note modified'})

      let array=[];
      for(let i=0; i < flavor.length; i++){
        array.push({ note_id:note_id, flavor_id:flavor[i]})
      } 
        notes_flavors
        .bulkCreate(
          array
        ,{ returning: true }
        )
    })
    .catch((err) => {
      res.status(422).json({ result: 'invalid info for modifying note' })
    })
  }
}