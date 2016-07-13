/**
 * Created by Brett Hadley on 18/03/2016.
 */
import gaze from 'gaze';
import ncp from './lib/copy';
import buildConfig from './build.config';
/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy(options) {
    await Promise.all([
        ncp(`${buildConfig.srcPath}/public`, `${buildConfig.distPath}`)
    ]);

    if (options && options.watch) {
        const watcher = await new Promise((resolve, reject) => {
            gaze(`${buildConfig.srcPath}/public/**/*.*`,
                (err, val) => err ? reject(err) : resolve(val));
        });
        watcher.on('changed', async(file) => {
            const fileName = file.substr(`${buildConfig.srcPath}/public/`.length);
            try {
                await ncp(file, `${buildConfig.distPath}/${fileName}`);
                console.log(`${fileName} updated - reload required`); // eslint-disable-line
            } catch (e) {
                console.error('Failed to copy changed file from tools/copy.js'); // eslint-disable-line
            }
        });
    }
}

export default copy;
