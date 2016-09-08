const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const NAME = 'sprint';
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
       state: {
           type: Sequelize.STRING,
           allowNull: false
       }
   }, {
       freezeTableName: true,
       classMethods: {
           associate(models) {
               models.sprint.hasMany(models.task, {
                   as: 'tasks'
               });
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
    if(hook.data.state === undefined) {
        hook.data.state = 'planning';
    }
}

const hooks = {
    before: {
        all(hook) {},
        find(hook) {
            populateTasks(hook);
        },
        get(hook) {
            populateTasks(hook);
        },
        create(hook) {
            populateDefaultValuesWhenNotSpecified(hook);
        },
        update(hook) {},
        patch(hook) {},
        remove(hook) {}
    },
    after: {
        all(hook) {},
        find(hook) {},
        get(hook) {},
        create(hook) {},
        update(hook) {},
        patch(hook) {},
        remove(hook) {}
    }
}

export default {
    serviceName: NAME,
    model,
    hooks
}
