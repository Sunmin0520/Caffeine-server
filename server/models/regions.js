'use strict';

module.exports = (sequelize, DataTypes) => {
  const regions = sequelize.define( 
    'regions',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timstamps: false
    }
  );
  regions.associate = function(models){
    regions.hasMany(models.cafes, {
      foreignKey:'region_id',
    })
  }
  return regions;
}

