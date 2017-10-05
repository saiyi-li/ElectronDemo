var options = require('./config/webpack.dev.js');

options.target = 'electron-renderer';

module.exports = options;