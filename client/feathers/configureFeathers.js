/**
 * Created by Brett Hadley on 13/07/2016.
 */
import io from 'socket.io-client';
import feathers from 'feathers/client';
import authentication from 'feathers-authentication/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';

const socket = io('http://localhost:3030/');
const app = feathers()
    .configure(hooks())
    .configure(socketio(socket))
    .configure(authentication({ storage: window.localStorage }));

export default app;
