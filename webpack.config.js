const env = require('./server/lib/env');
const isProd = env === 'production';
const {getAbsolutePath} = require('./server/utils/fs');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

console.log(`${isProd ? 'Production' : 'Development'} building`);

const getPathForIndex = (name) => getAbsolutePath(`./client/pages/${name}/`);

module.exports = {
    mode: env,
    entry: {
        main: ['@babel/polyfill', getPathForIndex('main')]
    },
    output: {
        filename: isProd ? '[name].bundle.min.js' : '[name].bundle.js',
        path: getAbsolutePath('./build/client')
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: {loader: 'babel-loader'}, exclude: /node_modules/},
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].bundle${isProd ? '.min' : ''}.css`
        })
    ],
    optimization: {
        minimize: isProd,
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};