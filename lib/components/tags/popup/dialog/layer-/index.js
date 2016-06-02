/**
 * 从sotre中拿到dialog数据，刷新，层级计算，
 *
 */
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

var _utils = require('../../utils/');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

function getStore() {
  return _utils.store;
}

var DialogLayer = (function (_React$Component) {
  _inherits(DialogLayer, _React$Component);

  function DialogLayer() {
    _classCallCheck(this, DialogLayer);

    _get(Object.getPrototypeOf(DialogLayer.prototype), 'constructor', this).apply(this, arguments);
    this.state = { layers: {} };
    this.onChange = this.onChange.bind(this);
  }

  _createClass(DialogLayer, [{
    key: 'onChange',
    value: function onChange() {
      var layers = this.store.getState();
      this.setState({ layers: layers });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.store = getStore();
      this.store.addListener(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.store.removeListener(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      //最后一个dialog弹层显示masker背景,保证masker只有一层显示出来
      var layers = this.state.layers;
      //layers = layers.map(layer=>{
      //return layer;
      //});
      console.log('dialog.layers:', layers);
      var keys = Object.keys(layers);
      if (!keys.length) {
        return null;
      }
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].root },
        keys.map(function (key) {
          return layers[key];
        })
      );
    }
  }]);

  return DialogLayer;
})(_react2['default'].Component);

exports.DialogLayer = DialogLayer;