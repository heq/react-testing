module.exports = {
    entry: [
        './src/app.js',
        './src/index.html'
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
            Navigation: 'src/components/Navigation.js',
            Coordinates: 'src/components/Coordinates.js',
            CoordinatesForm: 'src/components/CoordinatesForm.js',
            CoordinatesMessage: 'src/components/CoordinatesMessage.js',
            About: 'src/components/About.js',
            Examples: 'src/components/Examples.js',
            digitransit: 'src/api/digitransit.js',
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
    devtool: 'cheap-module-eval-source-map'
};
