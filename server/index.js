'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

server.on('listening', () => {
    console.log(`Feathers application started on ${app.get('host')}:${port}`);
    console.log('You have to call me Dragon, you have to call me Nighthawk!');
    if (process.send) {
        process.send('online');
    }

});
