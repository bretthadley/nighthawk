/**
 * Created by Brett Hadley on 28/03/2016.
 */
import path from 'path';

const config = {
    srcPath: path.join(__dirname, '../client'),
    app: 'index.js',
    distPath: path.join(__dirname, '../dist'),
    serverPath: path.join(__dirname, '../server'),
    serverPort: 3030,
    publicPath: '/',
    prodPublicPath: '/',
    testPath: path.join(__dirname, '../test')
};

export default config;
