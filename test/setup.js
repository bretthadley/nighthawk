/**
 * Created by brett.hadley on 27/06/2016.
 */
var hook = require('css-modules-require-hook');
var sass = require('node-sass');
var path = require('path');
var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

hook({
    extensions: ['.scss'],
    generateScopedName: '[local]___[hash:base64:5]',
    preprocessCss: function (css, filepath) {
        var result = sass.renderSync({
            includePaths: [path.resolve(filepath, '..')]
        });

        return result.css;
    }
});
