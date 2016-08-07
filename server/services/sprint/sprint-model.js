const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const sprint = sequelize.define('sprints', {
        text: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    sprint.sync();

    return sprint;
};
