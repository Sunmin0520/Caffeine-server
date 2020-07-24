'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define( //models/user를 정의
    'user',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false 
      },
      email: {
        type: DataTypes.STRING,
        unique: true, // 이미 등록된 이메일로 새롭게 가입하는 사용자가 없도록
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timstamps: false
    }
  );
  user.associate = function(models){
    user.hasMany(models.note, {//user:note = 1:N 
      foreignKey:'user_id',//user의 pk는 note의 fk
    })
  }
  return user;
}