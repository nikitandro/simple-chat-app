'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    'messages',
                    'createdAt',
                    {
                        type: Sequelize.DataTypes.DATE,
                        defaultValue: Sequelize.DataTypes.NOW,
                    },
                    { transaction: t },
                ),
                queryInterface.addColumn(
                    'messages',
                    'updatedAt',
                    {
                        type: Sequelize.DataTypes.DATE,
                        defaultValue: Sequelize.DataTypes.NOW,
                    },
                    { transaction: t },
                ),
            ]);
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
