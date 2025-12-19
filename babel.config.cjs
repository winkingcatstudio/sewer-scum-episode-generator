module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false, // Keep ES modules
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        version: '2023-05', // Use the new decorators
      },
    ],
  ],
};