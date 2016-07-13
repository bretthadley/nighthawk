/**
 * Created by Brett Hadley on 18/03/2016.
 */
import webpack from 'webpack';
import { makeConfig } from './webpack.config';

/**
 * Creates application bundles from the source files.
 */
function bundle(options) {
    return new Promise((resolve, reject) => {
        const config = makeConfig(options);
        webpack(config).run((err, stats) => {
            if (err) {
                return reject(err);
            }

            console.log(stats.toString(config.stats)); // eslint-disable-line no-console
            return resolve();
        });
    });
}

export default bundle;
