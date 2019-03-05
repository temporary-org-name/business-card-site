import env from './src/server/lib/env';
import {getAbsolutePath} from './src/server/utils/fs';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

const isProd = env === 'production';
console.log(`${isProd ? 'Production' : 'Development'} building`);

const getPathForIndex = (name: string) => getAbsolutePath(`./src/client/views/pages/${name}/`);

const babelPlugins: any[] = [];

const babelOptions = {
    comments: true,
    presets: [
        '@babel/preset-react',
        '@babel/preset-env'
    ],
    plugins: babelPlugins
};

module.exports = {
    mode: isProd ? 'production' : 'development',
    target: 'web',
    entry: {
        main: [getPathForIndex('main')]
    },
    output: {
        filename: isProd ? '[name].bundle.min.js' : '[name].bundle.js',
        path: getAbsolutePath('./build/client')
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            client: getAbsolutePath('./src/client')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: getAbsolutePath('./src/client/tsconfig.json')
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    },
    externals: {},
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