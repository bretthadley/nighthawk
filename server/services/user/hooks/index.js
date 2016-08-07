'use strict';

const globalHooks = require('../../../hooks/index');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
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
};

exports.after = {
    all: [hooks.remove('password')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};
