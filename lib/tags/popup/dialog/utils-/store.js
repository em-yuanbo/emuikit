'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fluxUtils = require('flux/utils');

var _dispatcherJs = require('./dispatcher.js');

var DialogStore = (function (_ReduceStore) {
  _inherits(DialogStore, _ReduceStore);

  function DialogStore() {
    _classCallCheck(this, DialogStore);

    _get(Object.getPrototypeOf(DialogStore.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DialogStore, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'reduce',
    value: function reduce(state, action) {
      var newstate = Object.assign({}, state);
      var layer = action.layer;
      switch (action.type) {
        case 'poptop':
          var keys = Object.keys(newstate);
          var dialog = action.dialog;
          dialog = _react2['default'].cloneElement(dialog, { layer: keys.length + 1 });
          newstate[keys.length + 1] = dialog;
          break;
        case 'popat':
          var dialog = action.dialog;
          console.log('popat', layer, dialog);
          // 查找目标layer上dialog，并清除
          // 将子layer一并清除
          dialog = _react2['default'].CloneElement(dialog, { layer: layer });
          newstate[layer] = dialog;
          break;
        case 'destory':
          console.log('destroy', layer);
          delete newstate[layer];
          break;
        case 'remove':
          delete newstate[action.popid];
          break;
        case 'removeAll':
          var keys = Object.keys(state);
          keys.forEach(function (key) {
            if (state[key].props.onCancel) {
              state[key].props.onCancel();
            }
          });
          newstate = {};
          break;
      }
      var keys = Object.keys(newstate);
      keys.forEach(function (key, index) {
        var newEle = _react2['default'].cloneElement(newstate[key], { top: index == keys.length - 1 });
        newstate[key] = newEle;
      });
      return newstate;
    }
  }]);

  return DialogStore;
})(_fluxUtils.ReduceStore);

var store = new DialogStore(_dispatcherJs.dispatcher);
exports.store = store;