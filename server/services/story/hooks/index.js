'use strict';

const hooks = require('feathers-hooks');
const globalHooks = require('../../../hooks/index');

exports.before = {
    all: [
        // ...globalHooks.authHooks
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
};

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [
        // hooks.populate('sprintId', { service: 'sprint', field: 'id' })
    ],
    update: [],
    patch: [],
    remove: []
};
