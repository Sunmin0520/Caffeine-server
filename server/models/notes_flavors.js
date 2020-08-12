'use strict';

module.exports = (sequelize, DataTypes) => {
  const notes_flavors = sequelize.define(
    'notes_flavors',
    {
      note_id: DataTypes.INTEGER,
      flavor_id: DataTypes.INTEGER
    }
  );
  notes_flavors.associate = function(models){
    notes_flavors.belongsTo(models.notes, {
      foreignKey:'note_id'
    });
    notes_flavors.belongsTo(models.flavors, {
      foreignKey: 'flavor_id'
    })
  },
  {
    timstamps: false
  }
  return notes_flavors;
}; 