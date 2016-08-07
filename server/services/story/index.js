'use strict';

const service = require('feathers-sequelize');
const story = require('./story-model');
const hooks = require('./hooks');

module.exports = function () {
    const app = this;

    const options = {
        Model: story(app.get('sequelize')),
        paginate: {
            default: 5,
            max: 25
        }
    };

    // Initialize our service with any options it requires
    app.use('/story', service(options));

    // Get our initialize service to that we can bind hooks
    const storyService = app.service('/story');

    // Set up our before hooks
    storyService.before(hooks.before);

    // Set up our after hooks
    storyService.after(hooks.after);
};
