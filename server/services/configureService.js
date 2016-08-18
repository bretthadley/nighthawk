import service from 'feathers-sequelize';

export default ({ serviceName, model, hooks }, app) => {
    const options = {
        Model: model(app.get('sequelize')),
        paginate: {
            default: 5,
            max: 25
        }
    };
    const name = `/${serviceName}`;
    console.log('Configuring service for', name);

    // Initialize our service with any options it requires
    app.use(name, service(options));

    // Get our initialize service to that we can bind hooks
    const createdService = app.service(name);

    // Set up our before hooks
    createdService.before(hooks.before);

    // Set up our after hooks
    createdService.after(hooks.after);
};
