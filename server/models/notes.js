'use strict';

module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define(
    'notes',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false 
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
  notes.associate = function(models){
    notes.belongsTo(models.users, {
      foreignKey:'user_id'
    })
  
    notes.belongsToMany(models.flavors,{
      through:'notes_flavors',
      foreignKey:'note_id'
    })
  };
  return notes;
}