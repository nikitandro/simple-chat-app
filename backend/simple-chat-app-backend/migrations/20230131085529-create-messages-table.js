'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return queryInterface.createTable('messages', {
                id: {
                    type: Sequelize.DataTypes.INTEGER,
                    unique: true,
                    autoIncrement: true,
                    primaryKey: true,
                },
                text: { type: Sequelize.DataTypes.STRING, allowNull: false },
                userId: {
                    type: Sequelize.DataTypes.UUID,
                    references: {
                        model: {
                            tableName: 'users',
                        },
                        key: 'id',
                    },
                    allowNull: false,
                },
            });
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
