const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const story = sequelize.define('story', {
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
                models.story.belongsTo(models.sprint,
                    {
                        allowNull: false
                    }
                );
            }
        }
    });

    return story;
};
