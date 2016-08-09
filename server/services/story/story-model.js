const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Story = sequelize.define('Story', {
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
            associate() {
                Story.belongsTo(sequelize.models.Sprint,
                    {
                        allowNull: false
                    }
                );
            }
        }
    });

    Story.sync();

    return Story;
};
