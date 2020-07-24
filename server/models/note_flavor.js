'use strict';

module.exports = (sequelize, DataTypes) => {
  const note_flavor = sequelize.define(
    'note_flavor',
    {
      note_id: DataTypes.INTEGER,
      flavor_id: DataTypes.INTEGER
    },
    {
      timstamps: false
    }
  );
  note_flavor.associate = function(models){
    note_flavor.belongsTo(models.note, {
      foreignKey:'note_id'
    });
    note_flavor.belongsTo(models.flavor, {
      foreignKey: 'flavor_id'
    })
  }

  return note_flavor;
}; 