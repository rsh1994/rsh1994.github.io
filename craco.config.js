const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.md$/,
        type: 'asset/source'
      });
      return webpackConfig;
    }
  }
};