const rules = require('./webpack.rules');
const webpack = require('webpack');

rules.push(
  {
    test: /\.(s[ac]ss)$/, // all scss files will be handled
    // Use loaders in that specific reverse order
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },

      {
        loader: 'sass-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      },
    ]
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg)$/,
    type: 'asset/resource',
  },
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  target: 'electron-renderer',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
