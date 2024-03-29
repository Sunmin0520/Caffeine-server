const { cafes, reviews } = require('../../models');

module.exports = {
  get: (req,res) => {
    let cafe_id = req.params.cafe_id;

    cafes
    .findOne({
      where: {
        id: cafe_id
      }
    })
    .then((data) => {
      let cafeData = data.dataValues;

      reviews
      .findAll({
        where: {
          cafe_id: cafe_id
        }
      })
      .then(data2 => {
        let review = [];
        for(let i=0; i < data2.length; i++){
          review.push({id: data2[i].dataValues.id, text: data2[i].dataValues.text, rating:data2[i].dataValues.rating, date:data2[i].dataValues.createdAt});
        }
        let reviewData = {'review': review}
        totalData = Object.assign({}, cafeData, reviewData);
      })
      .then(() => {
        res.status(200).json(totalData);
      })
      .catch((err) => {
        res.status(422).json({ result: 'cannot found cafe' });
      })
    })
  }
}