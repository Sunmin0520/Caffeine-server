//새로운 노트를 만든다 여기에는
// note 테이블 & 
//플레이버 테이블이 같이 들어간다. => 새로운 노트라는 정보는 두 테이블 모두에 얽혀있다.
//노트를 읽어오면 두 테이블의 정보가 모두 읽혀야한다.

const { notes,notes_flavors } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {//postNote와 postflavor를 합쳐서 읽어와야함
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
      let rating = req.body.rating;//
      let flavor = req.body.flavor//flavor는 다른 메소드로 담아주기//[1,2] 즉 배열 형태로

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
        console.log('데이터',data)
        console.log('아이디',data.dataValues.id)//note_id잘 나옴
          notes_flavors
          .bulkCreate([
            {note_id: data.dataValues.id},//note_id와 flavor_id가 데이터 각각의 테이블에 저장되는 상태
            {flavor_id:flavor[0]},
            {flavor_id:flavor[1]},
            
          ]
          //,{where : {note_id: data.dataValues.id}}//여기에 두면 아예 note_id기록안됨
          ,{returning: true}
          //,{updateOnDuplicate: true}
          )
          .then(data => {
            console.log('n/f데이터',data)
          })
      })
      .catch(err => {
        res.status(400).send(err);
      })
    }
  },
}

// .bulkCreate([
//   {flavor_id:flavor[0]},
//   {flavor_id:flavor[1]}
// ],{where : {note_id: data.dataValues.id}})
  // postNotesFlavors: (req,res) => {
  //   let token = req.cookies.token;
  //   if(!token){
  //     res.status(401).json({result:"token expired"});
  //   } else {
  //     let flavor = req.body.flavor//[1,2] 즉 배열 형태로

  //     notes_flavors
  //     .create({
  //       where: { note_id: 노트아이디 },//위 데이터에서 id 가져오기
  //       defaults: {
  //         flavor_id:flavor
  //       }
  //     })
     
//   }
// }
// }

// module.exports = {//postNote와 postflavor를 합쳐서 읽어와야함
//   postNote: (req,res) => {
  
//       let name = req.body.name;
//       let origin = req.body.origin;
//       let mall = req.body.mall;
//       let price = req.body.price;
//       let feature = req.body.feature;
//       let rating = req.body.rating;//flavor는 다른 메소드로 담아주기

//       notes
//       .create({
//         user_id: userId,
//         name: name,
//         origin: origin,
//         mall: mall,
//         price: price,
//         feature: feature,
//         rating: rating
//       })
//       .then(data => {
//         res.status(201).json(data);//id가 있겠지? 그 id를 받아온다.
//       .catch(err => {
//         res.status(400).send(err);
//       })
//     }
//   },


//   postFlavor: (req,res) => {
//     notes_flavors
//       .create({
//         where: { note_id: 노트아이디 },//이 노트 아이디를 가져올 방법은?
//         defaults: {
//           flavor_id:flavor
//         }
//       })
  
//   }
// }
// }