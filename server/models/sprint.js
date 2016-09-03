const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const model = (sequelize) => {
   const sprint = sequelize.define('sprint', {
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
               models.sprint.hasMany(models.story, {
                   as: 'stories'
               });
           }
       }
   });

   return sprint;
}

const populateStories = (hook) => {
    hook.params.sequelize = {
        include: [{
            model: hook.app.get('models').story,
            as: 'stories'
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
            return populateStories(hook);
        },
        get(hook) {
            return populateStories(hook);
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
    serviceName: 'sprint',
    model,
    hooks
}
