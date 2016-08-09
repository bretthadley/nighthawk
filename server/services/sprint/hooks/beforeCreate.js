/**
 * Created by Brett Hadley on 08/08/2016.
 */
module.exports = function(options) {
    return function(hook) {
        const { data } = hook;

        hook.data = Object.assign({}, data, {
            status: 'planning'
        });
    };
};
