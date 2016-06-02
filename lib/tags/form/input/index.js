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

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var EmInput = (function (_React$Component) {
  _inherits(EmInput, _React$Component);

  function EmInput() {
    _classCallCheck(this, EmInput);

    _get(Object.getPrototypeOf(EmInput.prototype), 'constructor', this).apply(this, arguments);
    this.state = { tip: '' };
    this.onChange = this.onChange.bind(this);
  }

  _createClass(EmInput, [{
    key: 'onChange',
    value: function onChange() {
      var value = this.refs.input.value;
      console.log(value);
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.input.value;
    }
  }, {
    key: 'register',
    value: function register(temp) {
      var key = this.props.name;
      temp[key] = this;
      return temp;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props);
      if (this.props.form) {
        this.props.form.register(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var tip;
      if (this.state.tip) {
        tip = _react2['default'].createElement(
          'div',
          { className: 'tip' },
          this.state.tip
        );
      }
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + (this.props.className || '') },
        _react2['default'].createElement('input', { ref: 'input', type: this.props.type || 'text', className: 'input', placeholder: this.props.placeholder, onChange: this.onChange, defaultValue: '' }),
        tip
      );
    }
  }]);

  return EmInput;
})(_react2['default'].Component);

EmInput.canBindForm = function (form) {
  return true;
};

var EmPassword = (function (_React$Component2) {
  _inherits(EmPassword, _React$Component2);

  function EmPassword() {
    _classCallCheck(this, EmPassword);

    _get(Object.getPrototypeOf(EmPassword.prototype), 'constructor', this).apply(this, arguments);
    this.state = { tip: 'error' };
  }

  _createClass(EmPassword, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + this.props.className },
        _react2['default'].createElement('input', { className: 'input', placeholder: this.props.placeholder }),
        _react2['default'].createElement(
          'div',
          { className: 'tip' },
          this.state.tip
        )
      );
    }
  }]);

  return EmPassword;
})(_react2['default'].Component);

exports.EmInput = EmInput;