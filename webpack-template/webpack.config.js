const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your HTML file
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // RegExp to match CSS files
                use: ['style-loader', 'css-loader'], // Loaders to apply
            },
          {
              test: /\.(png|jpg|jpeg|gif|svg)$/i, // RegExp to match image files
              type: 'asset/resource', // Provides URLs for images to be included in the bundle
          },
        ],
    },
    devServer: {
    static: './dist', // Serve content from the 'dist' directory
    open: true,       // Automatically open the browser
    hot: true,        // Enable Hot Module Replacement (HMR)
  },
  devtool: 'source-map',
};
