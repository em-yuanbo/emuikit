'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _dispatcherJs = require('./dispatcher.js');

var _storeJs = require('./store.js');

var id = 0;
function getId() {
  return ++id;
}

exports.getId = getId;
exports.dispatcher = _dispatcherJs.dispatcher;
exports.store = _storeJs.store;