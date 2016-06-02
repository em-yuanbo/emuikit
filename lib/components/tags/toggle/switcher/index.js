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

var _indexCss = require('./index.css');

var _indexCss2 = _interopRequireDefault(_indexCss);

var Switcher = (function (_React$Component) {
  _inherits(Switcher, _React$Component);

  function Switcher(props) {
    _classCallCheck(this, Switcher);

    _get(Object.getPrototypeOf(Switcher.prototype), 'constructor', this).call(this, props);
    this.state = { checked: this.props.defaultValue || false };
    this.onClick = this.onClick.bind(this);
  }

  _createClass(Switcher, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ checked: !this.state.checked });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.form) {
        this.props.form.register(this);
      }
    }
  }, {
    key: 'register',
    value: function register(temp) {
      var key = this.props.name;
      temp[key] = this;
      return temp;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.checked;
    }
  }, {
    key: 'render',
    value: function render() {
      var checkedClass = this.state.checked ? 'checked' : '';
      return _react2['default'].createElement(
        'div',
        { className: _indexCss2['default'].root + ' ' + checkedClass, onClick: this.onClick },
        _react2['default'].createElement(
          'div',
          { className: 'track' },
          _react2['default'].createElement('div', { className: 'thumb' })
        )
      );
    }
  }]);

  return Switcher;
})(_react2['default'].Component);

Switcher.canBindForm = function (form) {
  return true;
};

exports.Switcher = Switcher;