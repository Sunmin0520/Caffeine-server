'use strict';

module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define(
    'reviews',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cafe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text:{
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
  reviews.associate = function(models){
    reviews.belongsTo(models.cafes, {
      foreignKey:'cafe_id'
    })

    reviews.belongsTo(models.users, {
      foreignKey:'user_id'
    })
  };
  return reviews;
}