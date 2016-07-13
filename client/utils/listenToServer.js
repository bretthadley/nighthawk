/**
 * Created by Brett Hadley on 13/07/2016.
 */
const services = ['messages'];
const events = ['created', 'updated', 'removed'];

const resourceActions = {
    created: (type, payload) => ({
        type: `${type.toUpperCase()}_CREATED`,
        payload
    }),
    updated: (type, payload) => ({
        type: `${type.toUpperCase()}_UPDATED`,
        payload
    }),
    removed: (type) => ({
        type: `${type.toUpperCase()}_REMOVED`
    })
};

export default function listenToServer(app) {
    services.forEach((serviceName) => {
        const service = app.service(serviceName);

        events.forEach((event) => {
            service.on(event, (payload) => {
                resourceActions[event](serviceName, payload);
            });
        });
    });
}
