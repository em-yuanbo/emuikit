'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fluxUtils = require('flux/utils');

var _dispatcherJs = require('./dispatcher.js');

var RadioStore = (function (_ReduceStore) {
  _inherits(RadioStore, _ReduceStore);

  function RadioStore() {
    _classCallCheck(this, RadioStore);

    _get(Object.getPrototypeOf(RadioStore.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(RadioStore, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'reduce',
    value: function reduce(state, action) {
      var newstate = Object.assign({}, state);
      var name = action.name;
      var value = action.value;
      console.log(name, value);
      switch (action.type) {
        case 'own':
          newstate = Object.assign(newstate, _defineProperty({}, name, value));
          break;
      }
      return newstate;
    }
  }]);

  return RadioStore;
})(_fluxUtils.ReduceStore);

var store = new RadioStore(_dispatcherJs.dispatcher);
exports.store = store;