module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@/components": "./src/components",
            "@/constants": "./src/constants",
            "@/services": "./src/services",
            "@/hooks": "./src/hooks",
            "@/common": "./src/common",
            "@/screens": "./src/screens",
            "@/assets": "./assets",
            "@/": "./src",
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
