// 'use strict';

// module.exports = (sequelize) => {
//   const notes_flavors = sequelize.define(
//     'notes_flavors',
//     {},
//     {
//       timstamps: false
//     }
//   );
//   return notes_flavors;
// }

// 공식문서에는 notes_flavors에 대해서는 belongs to를 해야한다고 나와있지 않음 & 전체 중 3건의 검색결과만 찾음(helpdesk,blog)
// => 테이블 생성 후 원하는 관계대로 잘 생성되어있다면 이 부분은 삭제 예정. 

'use strict';

module.exports = (sequelize, DataTypes) => {
  const notes_flavors = sequelize.define(
    'notes_flavors',
    {
      note_id: DataTypes.INTEGER,
      flavor_id: DataTypes.INTEGER
    }
  );
  notes_flavors.associate = function(models){
    notes_flavors.belongsTo(models.notes, {
      foreignKey:'note_id'
    });
    notes_flavors.belongsTo(models.flavors, {
      foreignKey: 'flavor_id'
    })
  },
  {
    timstamps: false
  }
  return notes_flavors;
}; 