'use strict';

module.exports = (sequelize, DataTypes) => {
  const flavor = sequelize.define(
    'flavor',
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
  flavor.associate = function (models) {
    flavor.belongsToMany(models.note, {
      through: 'note_flavor',
      foreignKey: 'flavor_id'
    });
  };
  return flavor;
};
