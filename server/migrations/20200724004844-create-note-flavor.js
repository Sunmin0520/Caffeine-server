'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('note_flavor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      note_id: {
        type: Sequelize.INTEGER,
        references: {//note와의 관계설정(note.belongsToMany.flavor)
          model: 'note',
          key: 'id'
        }
      },
      flavor_id: {
        type: Sequelize.INTEGER,
        references: {//flavor와의 관계설정(flavor.belongsToMany.note)
          model: 'flavor',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('note_flavor');
  }
};