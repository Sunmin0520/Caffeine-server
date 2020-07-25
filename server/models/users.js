'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define( //models/users를 정의
    'users',
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true // 이미 등록된 이메일로 새롭게 가입하는 사용자가 없도록
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
    users.hasMany(models.notes, {//user:notes = 1:N 
      foreignKey:'user_id',//users의 pk는 notes의 fk
    })
  }
  return users;
}

