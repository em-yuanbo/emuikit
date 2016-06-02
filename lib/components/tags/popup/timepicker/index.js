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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var _button = require('../../button');

var _utils = require('../utils');

//TODO extends Panel

var TimePopup = (function (_React$Component) {
  _inherits(TimePopup, _React$Component);

  function TimePopup() {
    _classCallCheck(this, TimePopup);

    _get(Object.getPrototypeOf(TimePopup.prototype), 'constructor', this).apply(this, arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(TimePopup, [{
    key: 'onSubmit',
    value: function onSubmit() {
      this.props.onSubmit(new Date());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var time = this.props.time.toString();
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].popup + ' ' + (this.props.className || ''), style: this.props.style },
        _react2['default'].createElement(
          'div',
          { className: 'header' },
          '2016-05'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'content' },
          _react2['default'].createElement(
            'span',
            null,
            ' ',
            time,
            ' '
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'footer' },
          _react2['default'].createElement(_button.MainButton, { className: 'submit', onClick: this.onSubmit, label: 'Ok' })
        )
      );
    }
  }]);

  return TimePopup;
})(_react2['default'].Component);

TimePopup.props = {
  submit: _react2['default'].PropTypes.func.required
  //value:
};

var TimePicker = (function (_React$Component2) {
  _inherits(TimePicker, _React$Component2);

  function TimePicker() {
    _classCallCheck(this, TimePicker);

    _get(Object.getPrototypeOf(TimePicker.prototype), 'constructor', this).apply(this, arguments);
    this.popid = (0, _utils.getId)();
    this.state = { active: false, time: new Date() };
    this.onSubmit = this.onSubmit.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  _createClass(TimePicker, [{
    key: 'onSubmit',
    value: function onSubmit(time) {
      //validate time
      this.setState({ time: time, active: false });
      _utils.dispatcher.dispatch({
        type: 'remove',
        popid: this.popid
      });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.setState({ active: false });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //TODO 此处是否还需要dispatch,
      //dispatcher.dispatch({
      //type:'remove',
      //popid:this.popid
      //});
    }
  }, {
    key: 'onActive',
    value: function onActive(e) {
      e.preventDefault();
      e.stopPropagation();
      var active = !this.state.active;
      this.setState({ active: !active });

      if (active) {
        var clork = _reactDom2['default'].findDOMNode(this.refs.popupClork);

        var _clork$getBoundingClientRect = clork.getBoundingClientRect();

        var left = _clork$getBoundingClientRect.left;
        var _top = _clork$getBoundingClientRect.top;

        //console.log(clork);
        var timePopup = _react2['default'].createElement(TimePopup, { key: this.popid, className: 'popup', time: this.state.time, onCancel: this.onCancel, onSubmit: this.onSubmit, style: { left: left, top: _top } });
        _utils.dispatcher.dispatch({
          type: 'pop-replace',
          popid: this.popid,
          content: timePopup
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].root },
        _react2['default'].createElement(
          'div',
          { className: 'time' },
          _react2['default'].createElement('input', { value: this.state.time, onClick: this.onActive })
        ),
        _react2['default'].createElement('div', { ref: 'popupClork', className: 'popup-clork ' + _styleCss2['default'].popup })
      );
    }
  }]);

  return TimePicker;
})(_react2['default'].Component);

exports.TimePicker = TimePicker;