import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractSass = new ExtractTextPlugin({
    filename: "styles/main.css"
});

const Config = {
    entry: './app/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'env', 'stage-2', 'es2015']
                }
            },
            {
                test: /\.scss?$/,
                use: extractSass.extract({
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader'],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                loaders: [
                    'file-loader?name=/images/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(mp4|webm)$/,
                loader: 'file-loader',
                options: {
                    name: 'video/[name].[ext]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vk-services',
            template: './app/index.html',
            minify: {
                collapseWhitespace: true
            },
            showErrors: false
        }),
        extractSass
    ]
}

if (process.env.NODE_ENV === 'production') {
    Config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

export default Config;