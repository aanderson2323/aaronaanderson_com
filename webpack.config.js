const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "cheap-module-eval-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        title: 'Aaron A Anderson - Personal Site',
        template: 'src/index.ejs'
    })],
    devServer: {
        compress: true,
        port: 3000,
      }
};