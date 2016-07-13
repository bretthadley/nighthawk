/**
 * Created by Brett Hadley on 18/03/2016.
 */
import del from 'del';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
    try {
        await del(['dist/*']);
    } catch (e) {
        console.error(e); // eslint-disable-line no-console
    }
}

export default clean;
