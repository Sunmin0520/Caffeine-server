'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notes_flavors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      notes_id: {
        type: Sequelize.INTEGER,
        references: {//notes와의 관계설정(note.belongsToMany.flavor)
          model: 'notes',
          key: 'id'
        }
      },
      flavors_id: {
        type: Sequelize.INTEGER,
        references: {//flavor와의 관계설정(flavors.belongsToMany.notes)
          model: 'flavors',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('notes_flavors');
  }
};