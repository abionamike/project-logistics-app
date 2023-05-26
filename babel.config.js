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
            "@/services": "./src/services",
            "@/hooks": "./src/hooks",
            "@/common": "./src/common",
            "@/screens": "./src/screens",
            "@/assets": "./src/assets",
            "@/": "./src",
          }
        }
      ]
    ]
  };
};
