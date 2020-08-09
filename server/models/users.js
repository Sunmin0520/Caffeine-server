'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define( 
    'users',
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true 
      },
      password: {
        type: DataTypes.STRING,
      },
      google:{
        type: DataTypes.STRING,
      },
      facebook:{
        type: DataTypes.STRING
      }
    },
    {
      timstamps: false
    }
  );
  users.associate = function(models){
    users.hasMany(models.notes, {
      foreignKey:'user_id',
    })
    users.hasMany(models.reviews, {
      foreignKey:'user_id',
    })
  }
  return users;
}

