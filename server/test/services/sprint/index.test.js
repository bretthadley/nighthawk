'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('sprint service', () => {
    it('registered the sprints service', () => {
        assert.ok(app.service('sprint'));
    });
});
