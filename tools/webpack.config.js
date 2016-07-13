/**
 * Created by Brett Hadley on 18/03/2016.
 */
import webpack, { DefinePlugin, BannerPlugin, HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';  // eslint-disable-line
import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import buildConfig from './build.config';

export function makeConfig(options) {
    const isDev = options.env === 'development';

    const AUTOPREFIXER_BROWSERS = [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 35',
        'Firefox >= 31',
        'Explorer >= 9',
        'iOS >= 7',
        'Opera >= 12',
        'Safari >= 7.1'
    ];

    const GLOBALS = {
        'process.env.BROWSER': true,
        'process.env.NODE_ENV': `${JSON.stringify(options.env)}`
    };

    const POSTCSS_CONFIG = [
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
        require('css-mqpacker')(),
        require('cssnano')()
    ];

    const CSS_LOADERS = [
        '!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap', // eslint-disable-line
        '!postcss-loader',
        '!resolve-url-loader',
        '!sass-loader?&sourceMap=true&sourceMapContents=true&includePaths[]=./node_modules'
    ].reduce((c, n) => c + n, '');

    const CSS_LOADERS_DEV = `style-loader${CSS_LOADERS}`;

    const config = {
        context: buildConfig.srcPath,
        cache: isDev,
        debug: isDev,
        stats: {
            colors: true,
            reasons: isDev,
            hash: isDev,
            version: isDev,
            timings: true,
            chunks: isDev,
            chunkModules: isDev,
            cached: isDev,
            cachedAssets: isDev
        },
        plugins: [
            new webpack.DefinePlugin(GLOBALS),
            new webpack.optimize.OccurenceOrderPlugin(),
            new AssetsPlugin({ path: buildConfig.serverPath, filename: 'assets.json' })
        ],
        postcss: function plugins() {
            return POSTCSS_CONFIG;
        },
        sassLoader: {},
        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                    loader: 'file-loader'
                }
            ]
        }
    };

    const localConfig = Object.assign({}, config, {
        entry: {
            app: [
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                `${buildConfig.srcPath}/${buildConfig.app}`
            ]
        },
        output: {
            path: buildConfig.distPath,
            filename: '[name].js?[hash]',
            publicPath: buildConfig.publicPath
        },
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            ...config.plugins,
            new HotModuleReplacementPlugin()
        ],
        module: {
            loaders: [
                ...config.module.loaders,
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loader: CSS_LOADERS_DEV
                }
            ]
        }
    });

    const productionConfig = Object.assign({}, config, {
        entry: {
            app: [
                `${buildConfig.srcPath}/${buildConfig.app}`
            ]
        },
        output: {
            path: buildConfig.distPath,
            filename: '[name].js',
            publicPath: buildConfig.prodPublicPath
        },
        devtool: false,
        plugins: [
            ...config.plugins,
            new ExtractTextPlugin('[name].css', {
                path: buildConfig.distPath,
                allChunks: true
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true
                }
            }),
            new webpack.optimize.AggressiveMergingPlugin()
        ],
        module: {
            loaders: [
                ...config.module.loaders,
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract(CSS_LOADERS)
                }
            ]
        }
    });
    switch (options.env) {
        case 'development':
            return localConfig;
        default:
            return productionConfig;
    }
}
