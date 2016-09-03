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
               models.sprint.hasMany(models.story, {
                   as: 'stories'
               });
           }
       }
   });
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
            populateStories(hook);
        },
        get(hook) {
            populateStories(hook);
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
