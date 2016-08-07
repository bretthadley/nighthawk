'use strict';

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.
const auth = require('feathers-authentication').hooks;

// exports.myHook = function (options) {
//     return function (hook) {
//         console.log('My custom global hook ran. Feathers is awesome!');
//     };
// };

const authHooks = [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
];

module.exports.authHooks = authHooks;
