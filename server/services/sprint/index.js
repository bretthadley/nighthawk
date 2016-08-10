'use strict';

const service = require('feathers-sequelize');
const sprint = require('./sprint-model');
const hooks = require('./hooks');

function setupService() {
    const app = this;

    const options = {
        Model: sprint(app.get('sequelize')),
        paginate: {
            default: 5,
            max: 25
        }
    };
    app.use('/sprint', service(options));

    // Get our initialize service to that we can bind hooks
    const sprintService = app.service('/sprint');

    // Set up our before hooks
    sprintService.before(hooks.before);

    // Set up our after hooks
    sprintService.after(hooks.after);
}

module.exports = setupService;
