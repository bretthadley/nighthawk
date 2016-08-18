const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const model = (sequelize) => {
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
}

const hooks = {
    before: {
        all: [
            // ...globalHooks.authHooks
        ],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [
            // hooks.populate('sprintId', { service: 'sprint', field: 'id' })
        ],
        update: [],
        patch: [],
        remove: []
    }
}

export default {
    serviceName: 'story',
    model,
    hooks
}
