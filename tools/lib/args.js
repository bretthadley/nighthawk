/**
 * Created by Brett Hadley on 21/03/2016.
 */
import minimist from 'minimist';

const commands = minimist(process.argv.slice(3));

export default Object.assign({
    watch: false,
    tdd: false,
    env: 'production'
}, commands);
