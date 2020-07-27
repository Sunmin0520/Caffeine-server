const { reviews } = require('../../models');

module.exports = {
  get: (req, res) => {
      let cafe_id = req.params.cafe_id;

      reviews
      .findAll({
        where: {
          cafe_id: cafe_id
        }
      })
      .then((data) => {
        let sum = 0;
        let avrRating;
        for(let i = 0; i < data.length; i++){
          sum = sum + data[i].dataValues.rating;
        }
        return avrRating = sum / data.length;

      })
      .then((avrRating) => {
        res.status(200).send(JSON.stringify(Math.round(avrRating)));
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  }
}
