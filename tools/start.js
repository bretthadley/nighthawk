/**
 * Created by Brett Hadley on 18/03/2016.
 */
import run from './run';
import server from './server';
import browserSync from './browserSync';
import clean from './clean';
import copy from './copy';

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start(options) {
    await run(clean);
    await run(copy.bind(undefined, options));
    await run(server.bind(undefined, options));
    await run(browserSync.bind(undefined, options));
}

export default start;
