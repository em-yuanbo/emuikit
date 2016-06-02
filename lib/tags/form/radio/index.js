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

var _utils = require('../utils');

var Radio = (function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    _get(Object.getPrototypeOf(Radio.prototype), 'constructor', this).apply(this, arguments);
    this.state = { checked: this.props.checked };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    if (this.props.checked) {
      console.log(this.props);
      _utils.dispatcher.dispatch({
        type: 'own',
        name: this.props.name,
        value: this.props.value
      });
    }
  }

  _createClass(Radio, [{
    key: 'onClick',
    value: function onClick() {
      _utils.dispatcher.dispatch({
        type: 'own',
        name: this.props.name,
        value: this.props.value
      });
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
      return _utils.store.getState()[this.props.name];
    }

    //getValue(){
    //return store.getState()[this.props.name];
    //}

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _utils.store.addListener(this.onChange);
      if (this.props.form) {
        this.props.form.register(this);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _utils.store.removeListener(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      //if(this.isMounted()){
      var state = _utils.store.getState();
      var checked = state[this.props.name] == this.props.value;
      if (this.state.checked != checked) {
        console.log(this.props.name, state);
        this.setState({ checked: checked });
      }
      //}
    }
  }, {
    key: 'render',
    value: function render() {
      //<input type='radio' name={this.props.name} value={this.props.value} checked={this.props.checked}/>
      var checkedClass = this.state.checked ? 'checked' : '';
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].radio + ' ' + checkedClass, onClick: this.onClick },
        _react2['default'].createElement('div', { className: 'flag' })
      );
    }
  }]);

  return Radio;
})(_react2['default'].Component);

Radio.canBindForm = function () {
  return true;
};

var RadioGroup = (function (_React$Component2) {
  _inherits(RadioGroup, _React$Component2);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    _get(Object.getPrototypeOf(RadioGroup.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(RadioGroup, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return RadioGroup;
})(_react2['default'].Component);

exports.RadioGroup = RadioGroup;
exports.Radio = Radio;