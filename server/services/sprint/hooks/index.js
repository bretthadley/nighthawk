'use strict';

const globalHooks = require('../../../hooks/index');
const beforeCreate = require('./beforeCreate');

exports.before = {
    all: [
        // ...globalHooks.authHooks
    ],
    find: [],
    get: [],
    create: [
        beforeCreate()
    ],
    update: [],
    patch: [],
    remove: []
};

exports.after = {
    all: [],
    find: [],
    get: [],
    create: [
    ],
    update: [],
    patch: [],
    remove: []
};
