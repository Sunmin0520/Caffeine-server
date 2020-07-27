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
      let cafeData = data.dataValues;//reviews를 제외한 한 카페의 데이터들

      reviews
      .findAll({
        where: {
          cafe_id: cafe_id
        }
      })
      .then(data2 => {
        let review = [];
        for(let i=0; i < data2.length; i++){
          review.push({text: data2[i].dataValues.text, rating:data2[i].dataValues.rating});
        }
        let reviewData = {'review': review}
        totalData = Object.assign({}, cafeData, reviewData);
      })
      .then(() => {
        res.status(200).json(totalData);//reviews까지 들어간 한 카페의 전체 데이터
      })
      .catch((err) => {
        res.status(404).send(err);
      })
    })
  }
}