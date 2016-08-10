'use strict';

const globalHooks = require('../../../hooks/index');
const { populateStories } = require('./hooks');

exports.before = {
    all(hook) {},
    find(hook) {
        return populateStories(hook);
    },
    get(hook) {
        return populateStories(hook);
    },
    create(hook) {},
    update(hook) {},
    patch(hook) {},
    remove(hook) {}
};

exports.after = {
    all(hook) {},
    find(hook) {},
    get(hook) {},
    create(hook) {},
    update(hook) {},
    patch(hook) {},
    remove(hook) {}
};
