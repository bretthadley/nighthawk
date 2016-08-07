'use strict';

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
    create: [],
    update: [],
    patch: [],
    remove: []
};
