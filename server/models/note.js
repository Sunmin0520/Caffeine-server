'use strict';

module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define(
    'note',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false //null로는 db에 들어갈 수 없도록 설정
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      origin:{
        type: DataTypes.STRING
      },
      mall:{
        type: DataTypes.STRING
      },
      price:{
        type: DataTypes.INTEGER
      },
      feature:{
        type: DataTypes.STRING(1234)
      },
      rating:{
        type: DataTypes.INTEGER
      }
    },
    {
      timstamps: false
    }
  );
  note.associate = function(models){
    note.belongsTo(models.user, {
      foreignKey:'user_id'
    })
  
    note.belongsToMany(models.flavor,{
      through:'note_flavor',
      foreignKey:'note_id'
    })
  };
  return note;
}