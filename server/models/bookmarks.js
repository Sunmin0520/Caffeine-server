'use strict';

module.exports = (sequelize, DataTypes) => {
  const bookmarks = sequelize.define(
    'bookmarks',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cafe_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timstamps: false
    }
  );
  bookmarks.associate = function(models){
    bookmarks.belongsTo(models.cafes, {
      foreignKey:'cafe_id'
    })

    bookmarks.belongsTo(models.users, {
      foreignKey:'user_id'
    })
  };
  return bookmarks;
}