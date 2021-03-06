/**
 * Created by Brett Hadley on 13/07/2016.
 */
const services = ['api/sprint', 'api/task'];
const events = ['created', 'updated', 'removed', 'patched', 'serviceError'];

const resourceActions = {
    created: (type, payload) => ({
        type: require(`../reducers/${type}`)[`${type.toUpperCase()}_CREATED`],
        payload
    }),
    updated: (type, payload) => ({
        type: require(`../reducers/${type}`)[`${type.toUpperCase()}_UPDATED`],
        payload
    }),
    removed: (type) => ({
        type: require(`../reducers/${type}`)[`${type.toUpperCase()}_REMOVED`],
    }),
    patched: (type, payload) => ({
        type: require(`../reducers/${type}`)[`${type.toUpperCase()}_PATCHED`],
        payload
    })
};

export default function listenToServer(app, store) {
    services.forEach((serviceName) => {
        const service = app.service(serviceName);
        events.forEach((event) => {
            service.on(event, (payload) => {
                console.log(`EVENT FROM SERVER ${serviceName} ${event}`);
                store.dispatch(resourceActions[event](serviceName.replace('api/', ''), payload));
            });
        });
    });
}
