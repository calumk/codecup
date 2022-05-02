const path = require('path');

module.exports = {
  entry: './src/codeflask.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'codeflask.bundle.js',
    library: 'CodeFlask',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-nested-ancestors'),
                  require('postcss-nested'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use : [{
            loader  : 'svg-inline-loader',
            options : {
                removeSVGTagAttrs : false
            }
        }]
      }
    ],
  },
  resolve: {
    extensions: [ '.js' ],
  }
};
