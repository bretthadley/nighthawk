const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const NAME = 'task';
const model = (sequelize) => {
    return sequelize.define(NAME, {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estimatedTime: {
            type: Sequelize.TIME,
            allowNull: false
        },
        loggedTime: {
            type: Sequelize.TIME,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                models.task.belongsTo(models.story,
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
        all: [],
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
        create: [],
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
