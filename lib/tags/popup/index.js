/**
 * droplist->popup->list + renderItem + renderResult + submit
 *
 * <PopUp>
 * <status popupResult={} value={}/>
 * <List pops={}>
 * <List.Item value={xxx}>
 * </List.Item>
 * </List>
 * </PopUp>
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

//import styles from './style.css';
//const {PropTypes} = React;

var _layer = require('./layer');

var _timepicker = require('./timepicker');

var _droplist = require('./droplist');

var PopUp = (function (_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp() {
    _classCallCheck(this, PopUp);

    _get(Object.getPrototypeOf(PopUp.prototype), 'constructor', this).apply(this, arguments);
    this.state = {
      active: this.props.active || false
    };
  }

  _createClass(PopUp, [{
    key: 'render',
    value: function render() {
      var children = this.props.items.map(this.props.renderItem);
      return _react2['default'].createElement(
        'div',
        { className: 'popup' },
        children
      );
    }
  }]);

  return PopUp;
})(_react2['default'].Component);

PopUp.props = {
  active: _react.PropTypes.bool,
  pops: _react.PropTypes.any,
  submit: _react.PropTypes.func,
  renderResult: _react.PropTypes.object
};

exports.PopUp = PopUp;
exports.PopLayer = _layer.PopLayer;
exports.TimePicker = _timepicker.TimePicker;
exports.DropDown = _droplist.DropDown;