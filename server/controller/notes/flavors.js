const { flavors } = require('../../models');

module.exports = {
  get: (req, res) => {
  flavors
  .findAll()
  .then((data) => {//data가 배열이라면 data[0]은 나와야하지만 아예 note.js와 연결되어서 null로 읽힘
    console.log('데이터',data)
  })
  .catch((err) => {
    res.status(404).send(err);
  })
    
  }
}
//expected data = [{id:1, name:'레몬'},{id:2, name:'사과'}]
//result = note.js와 연결