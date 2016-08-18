'use strict';
const authentication = require('./authentication');
import * as Models from '../models';

const path = require('path');
const fs = require('fs-extra');
const Sequelize = require('sequelize');

import insertInitialData from '../insertInitialData';
import configureService from './configureService';

module.exports = function () {
    const app = this;

    fs.ensureDirSync(path.dirname(app.get('sqlite')));
    const sequelize = new Sequelize('feathers', null, null, {
        dialect: 'sqlite',
        storage: app.get('sqlite'),
        logging: false
    });
    app.set('sequelize', sequelize);

    // Configure service for each model.
    Models.default.forEach(model => configureService(model, app));

    const models = sequelize.models;
    app.set('models', models);

    // Apply associations on each model
    Object.keys(models)
        .map(name => sequelize.models[name])
        .filter(model => model.associate !== undefined)
        .forEach(model => model.associate(models));

    sequelize.sync();

    // TODO
    // Insert some dummy data!
    // insertInitialData(Models);
};
