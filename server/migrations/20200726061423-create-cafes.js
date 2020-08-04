'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cafes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      region_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'regions',
          key: 'id'
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(1234),
        unique: true
      },
      sell_beans: {
        type: Sequelize.BOOLEAN
      },
      instagram_account: {
        type: Sequelize.STRING
      },
      rating_average: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('cafes');
  }
};