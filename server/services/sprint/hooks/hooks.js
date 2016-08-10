/**
 * Created by Brett Hadley on 09/08/2016.
 */
function populateStories(hook) {
    hook.params.sequelize = {
        include: [{
            model: hook.app.get('models').story,
            as: 'stories'
        }]
    };

    return hook;
}

module.exports.populateStories = populateStories;
