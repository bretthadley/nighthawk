module.exports = {
    description() {
        return 'Generates a duck (aka reducer)';
    },
    fileMapTokens() {
        return {
            __duck__: (options) => {
                return options.settings.getSetting('duckPath');
            }
        };
    }
};
