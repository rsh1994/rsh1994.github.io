// config-overrides.js (프로젝트 루트에 생성)
module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
  
    return config;
  };