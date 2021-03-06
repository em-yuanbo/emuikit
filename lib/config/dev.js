'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var config = {
  appEnv: 'dev' // feel free to remove the appEnv property here
};

exports['default'] = Object.freeze(Object.assign({}, _base2['default'], config));
module.exports = exports['default'];