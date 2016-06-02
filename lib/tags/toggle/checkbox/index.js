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

var _switcher = require('../switcher');

var _indexCss = require('./index.css');

var _indexCss2 = _interopRequireDefault(_indexCss);

var CheckboxWithLabel = (function (_React$Component) {
  _inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel() {
    _classCallCheck(this, CheckboxWithLabel);

    _get(Object.getPrototypeOf(CheckboxWithLabel.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CheckboxWithLabel, [{
    key: 'render',
    value: function render() {
      //var checkedClass = this.state.checked?'checked':'';
      return _react2['default'].createElement(
        'div',
        { className: _indexCss2['default'].root + ' ' + (this.props.className || ''), onClick: this.onClick },
        _react2['default'].createElement(Checkbox, null),
        this.props.label
      );
    }
  }]);

  return CheckboxWithLabel;
})(_react2['default'].Component);

var Checkbox = (function (_Switcher) {
  _inherits(Checkbox, _Switcher);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(Checkbox.prototype), 'componentDidMount', this).call(this);
    }
  }, {
    key: 'register',
    value: function register(temp) {
      var key = this.props.name;
      var cs = temp[key];
      if (Array.isArray(cs)) {
        cs.push(this);
      } else if (cs) {
        temp[key] = [cs, this];
      } else {
        temp[key] = [this];
      }
      return temp;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.checked ? this.props.value : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var checkedClass = this.state.checked ? 'checked' : '';
      return _react2['default'].createElement(
        'div',
        { ref: 'ccb', className: _indexCss2['default'].root + ' ' + checkedClass + ' ' + (this.props.className || ''), onClick: this.onClick },
        _react2['default'].createElement(
          'div',
          { className: 'bg' },
          _react2['default'].createElement(
            'div',
            { className: 'flag' },
            'r'
          )
        )
      );
    }
  }]);

  return Checkbox;
})(_switcher.Switcher);

Checkbox.canBindForm = function (form) {
  return true;
};

var CheckboxWithoutBackground = (function (_React$Component2) {
  _inherits(CheckboxWithoutBackground, _React$Component2);

  function CheckboxWithoutBackground() {
    _classCallCheck(this, CheckboxWithoutBackground);

    _get(Object.getPrototypeOf(CheckboxWithoutBackground.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CheckboxWithoutBackground, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(Checkbox, { className: 'nobg ' + (this.props.className || '') });
    }
  }]);

  return CheckboxWithoutBackground;
})(_react2['default'].Component);

exports.Checkbox = Checkbox;
exports.CheckboxWithLabel = CheckboxWithLabel;
exports.CheckboxWithoutBackground = CheckboxWithoutBackground;