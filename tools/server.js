/**
 * Created by Brett Hadley on 18/03/2016.
 */
import cp from 'child_process';
import gaze from 'gaze';
import buildConfig from './build.config';

async function server(options) {
    return new Promise((resolve, reject) => {
        function start() {
            // Fork spawns a new node instance so we can't pass complex types such as object.
            const serverProcess = cp.fork(`${buildConfig.serverPath}`, {
                env: Object.assign({
                    NODE_ENV: 'local',
                    watch: false
                }, options),
                silent: false
            });

            serverProcess.once('message', message => {
                if (message.match(/^online$/)) {
                    resolve();
                }
            });
            serverProcess.once('error', err => reject(err));
            process.on('exit', () => serverProcess.kill('SIGTERM'));
            return serverProcess;
        }

        let express = start();
        if (options && options.watch) {
            const serverWatcher = new Promise((rs, rj) => {
                gaze(`${buildConfig.serverPath}/**/*.js`,
                    (err, val) => err ? rj(err) : rs(val));
            }).then((watch) => {
                watch.on('changed', () => {
                    console.log('server/**/* changed - reload browser');
                    express.kill('SIGTERM');
                    express = start();
                });
            });
        }
    });
}

export default server;
