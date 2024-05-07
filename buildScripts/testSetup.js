// This file isn't transpiled, so must us CommonJS and ES5

// Register babl to transpile before out tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
