'use strict';

module.exports = (sequelize, DataTypes) => {
  const flavors = sequelize.define(
    'flavors',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    // {
    //   timstamps: false
    // }
  );
  flavors.associate = function (models) {
    flavors.belongsToMany(models.notes, {
      through: 'notes_flavors',
      foreignKey: 'flavors_id'
    });
  };
  return flavors;
};
