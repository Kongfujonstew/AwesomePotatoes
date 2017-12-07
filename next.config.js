const webpack = require('webpack');

require('dotenv').config();
module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.AUTH0_DOMAIN': JSON.stringify(process.env.AUTH0_DOMAIN),
        'process.env.AUTH0_CLIENT_ID': JSON.stringify(process.env.AUTH0_CLIENT_ID),
        'process.env.GRAPHCOOL_URI': JSON.stringify(process.env.GRAPHCOOL_URI)
      })
    );
    return config;
  }
};
