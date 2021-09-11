module.exports = {
  entry: './src/index.js',
  plugins: [
    require('my-unplugin/webpack').default(),
  ],
}
