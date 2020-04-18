const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "cheap-module-eval-source-map",
    optimization: {
        minimizer: [new TerserPlugin({ /* additional options here */ })],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    test: /node_modules/,
                    name: "vendor"
                },
            },
        },
        usedExports: true,
    },
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
    }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: true,
        port: 3000,
    }
};