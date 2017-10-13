'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/src',

    entry:{
        app: "./index.js"
    },

    output: {
        path: __dirname + '/public',
        filename: "./js/[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),

        new ExtractTextPlugin("./css/styles.css"),

        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: '../src/index.html',
            filename: '../public/index.html'
        }),

    ],

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', "es2016", 'stage-2',  "react"],
                    },
                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:
                        {
                            loader: "css-loader",
                            options:
                                {
                                    minimize: true
                                }
                        },
                })
            },

            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },

                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: __dirname + '/postcss.config.js'
                                }
                            }
                        }

                    ]
                })
            }
        ]
    },

    devServer: {
        contentBase: __dirname + '/public',
        compress: true,
        port: 9000
    }
};

if (NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })

    )
};

// module.exports = config