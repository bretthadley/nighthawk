module.exports = {
    description() {
        return 'Generates a smart (aka Container) component';
    },
    fileMapTokens() {
        return {
            __smart__: (options) => {
                return options.settings.getSetting('smartPath');
            }
        };
    }
};
