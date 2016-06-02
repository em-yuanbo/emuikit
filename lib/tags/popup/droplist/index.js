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

var _list = require('../../list');

var _avatarStatus = require('../../avatar/status');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var _utils = require('../utils');

var DropDown = (function (_React$Component) {
  _inherits(DropDown, _React$Component);

  function DropDown() {
    _classCallCheck(this, DropDown);

    _get(Object.getPrototypeOf(DropDown.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DropDown, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', null);
    }
  }]);

  return DropDown;
})(_react2['default'].Component);

var OnLinePop = (function (_React$Component2) {
  _inherits(OnLinePop, _React$Component2);

  function OnLinePop() {
    _classCallCheck(this, OnLinePop);

    _get(Object.getPrototypeOf(OnLinePop.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(OnLinePop, [{
    key: 'render',
    value: function render() {
      return {};
    }
  }]);

  return OnLinePop;
})(_react2['default'].Component);

var OnLineDropListPop = (function (_React$Component3) {
  _inherits(OnLineDropListPop, _React$Component3);

  function OnLineDropListPop() {
    _classCallCheck(this, OnLineDropListPop);

    _get(Object.getPrototypeOf(OnLineDropListPop.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(OnLineDropListPop, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _list.List,
        { key: this.props.popid, className: '' + _styleCss2['default'].droplist, onCancel: this.props.onCancel, onSelect: this.props.onSelect, selectedIndex: this.props.selectedIndex, style: { left: this.props.left, top: this.props.top } },
        _react2['default'].createElement(
          _list.List.Item,
          null,
          _react2['default'].createElement(_avatarStatus.Status.OnLine, { className: 'avatar-status' }),
          _react2['default'].createElement(
            'div',
            { className: 'item-label' },
            '在线'
          )
        ),
        _react2['default'].createElement(
          _list.List.Item,
          null,
          _react2['default'].createElement(_avatarStatus.Status.OffLine, { className: 'avatar-status' }),
          _react2['default'].createElement(
            'div',
            { className: 'item-label' },
            '离线'
          )
        )
      );
    }
  }]);

  return OnLineDropListPop;
})(_react2['default'].Component);

var OnLineDropList = (function (_React$Component4) {
  _inherits(OnLineDropList, _React$Component4);

  function OnLineDropList(props) {
    _classCallCheck(this, OnLineDropList);

    _get(Object.getPrototypeOf(OnLineDropList.prototype), 'constructor', this).apply(this, arguments);
    this.state = { active: false, items: [{}, {}, {}], selectedIndex: 1 };
    this.popid = (0, _utils.getId)();
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  _createClass(OnLineDropList, [{
    key: 'onClick',
    value: function onClick(e) {
      e.stopPropagation();
      var active = !this.state.active;
      this.setState({ active: active });
      var dropdown = null;
      if (active) {
        var clork = _reactDom2['default'].findDOMNode(this.refs.popupClork);

        var _clork$getBoundingClientRect = clork.getBoundingClientRect();

        var left = _clork$getBoundingClientRect.left;
        var _top = _clork$getBoundingClientRect.top;

        //console.log(clork.getBoundingClientRect(),clork);
        dropdown = _react2['default'].createElement(OnLineDropListPop, { key: this.popid, onCancel: this.onCancel, onSelect: this.onSelect, selectedIndex: this.state.selectedIndex, left: left, top: _top });
        _utils.dispatcher.dispatch({
          type: 'add',
          popid: this.popid,
          popup: dropdown
        });
      }
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.setState({ active: false });
    }
  }, {
    key: 'onSelect',
    value: function onSelect(child, index) {
      //console.log(child,index);
      this.setState({ active: false, selectedIndex: index });
      _utils.dispatcher.dispatch({
        type: 'remove',
        popid: this.popid
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var onLineStatus = _react2['default'].createElement(_avatarStatus.Status.OnLine, { className: 'avatar-status', onClick: this.onClick });
      if (this.state.selectedIndex) {
        onLineStatus = _react2['default'].createElement(_avatarStatus.Status.OffLine, { className: 'avatar-status', onClick: this.onClick });
      }
      //console.log(this.state.selectedIndex);
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].root },
        onLineStatus,
        _react2['default'].createElement('div', { ref: 'popupClork', className: 'clork' })
      );
    }
  }]);

  return OnLineDropList;
})(_react2['default'].Component);

DropDown.OnLineStatus = OnLineDropList;

exports.DropDown = DropDown;