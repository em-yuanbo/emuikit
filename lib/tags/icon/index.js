'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var BaseIcon = (function (_React$Component) {
  _inherits(BaseIcon, _React$Component);

  function BaseIcon() {
    _classCallCheck(this, BaseIcon);

    _get(Object.getPrototypeOf(BaseIcon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BaseIcon, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + this.props.className, onClick: this.props.onClick },
        this.props.content || '1'
      );
    }
  }]);

  return BaseIcon;
})(_react2['default'].Component);

function Cancel(props) {
  return _react2['default'].createElement(BaseIcon, _extends({ className: '' + (props.className || ''), content: 'o' }, props));
}
function Drag(props) {
  return _react2['default'].createElement(BaseIcon, _extends({ content: ':' }, props));
}

function Minus(props) {
  return _react2['default'].createElement(BaseIcon, _extends({ content: 'q' }, props));
}
function Add(props) {
  return _react2['default'].createElement(BaseIcon, _extends({ className: '' + (props.className || ''), content: 'p' }, props));
}

function Search(props) {
  return _react2['default'].createElement(BaseIcon, _extends({ className: '' + (props.className || ''), content: 'p' }, props));
}

var Icon = {
  Edit: BaseIcon,
  Cancel: Cancel,
  Drag: Drag,
  Add: Add,
  Search: Search,
  Minus: Minus
};

exports.Icon = Icon;