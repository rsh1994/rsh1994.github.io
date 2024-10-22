const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // 마크다운 파일 로더 설정
      webpackConfig.module.rules.push({
        test: /\.md$/,
        type: 'asset/source'
      });

      // Node.js 폴리필 설정
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve?.fallback,
          "buffer": require.resolve("buffer/"),
          "process": require.resolve("process/browser"),
        }
      };

      // 플러그인 추가
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser'
        })
      ];

      return webpackConfig;
    }
  }
};