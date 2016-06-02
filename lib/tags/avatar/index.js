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

//import {ChannelIcon} from '../channel';

var _status = require('./status');

var BaseStatus = _status.Status.BaseStatus;
var cloneElement = _react2['default'].cloneElement;

var Avatar = (function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    _get(Object.getPrototypeOf(Avatar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Avatar, [{
    key: 'render',

    //shouldComponentUpdate(nextProps,nextState){
    //return false;
    //}
    value: function render() {
      var children = null;
      if (this.props.children) {
        //console.log(this.props.children);
        children = _react2['default'].Children.map(this.props.children, function (child) {
          //console.log(child.type);
          //console.log(BaseStatus);
          if (child.type == BaseStatus) {
            //console.log('baseStatus');

          }
          return cloneElement(child, { className: child.props.className + ' avatar-channel' });
        });
      }

      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + (this.props.className || ''), onClick: this.props.onClick },
        _react2['default'].createElement('img', { src: 'http://static.hdslb.com/images/member/noface.gif', className: 'photo' }),
        children
      );
    }
  }]);

  return Avatar;
})(_react2['default'].Component);

Avatar.Small = function (props) {
  return _react2['default'].createElement(Avatar, _extends({ className: 'small ' + (props.className || '') }, props));
};

exports.Avatar = Avatar;