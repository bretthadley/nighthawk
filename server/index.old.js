/**
 * Created by Brett Hadley on 29/03/2016.
 */
require('babel-register');
import Express from 'express';
import buildConfig from '../tools/build.config';
import hbs from 'hbs';

const app = new Express();

app.set('view engine', 'html');
app.engine('html', hbs.__express); // eslint-disable-line
app.set('views', `${buildConfig.distPath}/views`);

app.use(Express.static(buildConfig.distPath));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('*', (req, res) => {
    const assets = require('./assets.json'); // eslint-disable-line
    res.render('index', assets);
});

app.listen(buildConfig.serverPort, (error) => {
    if (!error) {
        if (process.send) {
            process.send('online');
        }
    }
});

module.exports = app;
