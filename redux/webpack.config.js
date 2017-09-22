var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './src/app.js',
        './src/index.html'
    ],
    // to have variables available on the entry files(?)
    externals: {
        jquery: 'jQuery',
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: __dirname + '/dist'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'src/components/Main.js',
            applicationStyles: 'src/styles/app.scss',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /index\.html/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    devtool: 'cheap-source-map'
    //devtool: 'cheap-module-eval-source-map'
};
