const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const sprint = sequelize.define('sprint', {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                models.sprint.hasMany(models.story, {
                    as: 'stories'
                });
            }
        }
    });

    return sprint;
};
