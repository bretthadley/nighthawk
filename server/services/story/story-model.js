const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Story = sequelize.define('stories', {
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
                        foreignKey: 'sprintId'
                    }
                );
            }
        }
    });

    Story.sync();

    return Story;
};
