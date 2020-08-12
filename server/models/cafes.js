'use strict';

module.exports = (sequelize, DataTypes) => {
  const cafes = sequelize.define(
    'cafes',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING(1234),
        unique: true
      },
      sell_beans:{
        type: DataTypes.BOOLEAN
      },
      instagram_account:{
        type: DataTypes.STRING
      },
      rating_average:{
        type: DataTypes.INTEGER
      }
    },
    {
      timstamps: false
    }
  );
  cafes.associate = function(models){
    cafes.belongsTo(models.regions, {
      foreignKey:'region_id'
    })
    cafes.hasMany(models.reviews, {
      foreignKey: 'cafe_id'
    })
  };
  return cafes;
}