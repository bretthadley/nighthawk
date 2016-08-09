const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Sprint = sequelize.define('Sprint', {
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
                Sprint.hasMany(models.Story);
            }
        }
    });

    return Sprint;
};
