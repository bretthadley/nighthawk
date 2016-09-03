const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const NAME = 'story';
const model = (sequelize) => {
    return sequelize.define(NAME, {
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
    serviceName: NAME,
    model,
    hooks
}
