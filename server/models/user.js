'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');
const globalHooks = require('../hooks/index');
const feathersHooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const model = (sequelize) => {
    const user = sequelize.define('user', {
        facebookId: {
            type: Sequelize.STRING,
            allowNull: true
        },
        googleId: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    user.sync();

    return user;
};

const hooks = {
    before: {
        all: [],
        find: [
            ...globalHooks.authHooks
        ],
        get: [
            ...globalHooks.authHooks,
            auth.restrictToOwner({ ownerField: 'id' })
        ],
        create: [
            auth.hashPassword()
        ],
        update: [
            ...globalHooks.authHooks,
            auth.restrictToOwner({ ownerField: 'id' })
        ],
        patch: [
            ...globalHooks.authHooks,
            auth.restrictToOwner({ ownerField: 'id' })
        ],
        remove: [
            ...globalHooks.authHooks,
            auth.restrictToOwner({ ownerField: 'id' })
        ]
    },
    after: {
        all: [feathersHooks.remove('password')],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
}

export default {
    serviceName: 'user',
    model,
    hooks
}
