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
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // parentTaskId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: true
        // },
        estimatedTime: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        loggedTime: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        classMethods: {
            associate(models) {
                models.task.belongsTo(models.sprint, { allowNull: false });
                models.task.belongsTo(models.task, { allowNull: true });
                models.task.hasMany(models.task, { as: 'tasks' });
            }
        }
    });
}

const populateTasks = (hook) => {
    hook.params.sequelize = {
        include: [{
            model: hook.app.get('models').task,
            as: 'tasks'
        }]
    };

    return hook;
};

const populateDefaultValuesWhenNotSpecified = hook => {
    // hook.data.t

    if(hook.data.type === 'task') {
        if(hook.data.estimatedTime === undefined) {
            hook.data.estimatedTime = 0;
        }
        if(hook.data.loggedTime === undefined) {
            hook.data.loggedTime = 0;
        }
    }

    if(hook.data.type === 'story') {
        // set story default values.
    }
}

const hooks = {
    before: {
        all: [],
        find(hook) {
            populateTasks(hook);
        },
        get(hook) {
            populateTasks(hook);
        },
        create(hook) {
            populateDefaultValuesWhenNotSpecified(hook);
        },
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
