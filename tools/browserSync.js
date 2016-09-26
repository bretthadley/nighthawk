/**
 * Created by Brett Hadley on 30/03/2016.
 */
import Browsersync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import buildConfig from './build.config';
import { makeConfig } from './webpack.config';

function browserSync(options) {
    return new Promise((resolve) => {
        const config = makeConfig(options);
        const compiler = webpack(config);
        const wpDevMiddlewarte = webpackDevMiddleware(compiler, {
            noInfo: true,
            lazy: false,
            publicPath: config.output.publicPath
        });
        const wpHotMiddleware = webpackHotMiddleware(compiler);
        const bs = Browsersync.create();

        bs.init({
            proxy: {
                target: 'https://nighthawk-144220.appspot.com',
                middleware: [wpDevMiddlewarte, wpHotMiddleware]
            },
            port: buildConfig.serverPort + 1
        }, resolve);
    });
}

export default browserSync;
