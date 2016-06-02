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

var cloneElement = _react2['default'].cloneElement;

var EuiButton = (function (_React$Component) {
  _inherits(EuiButton, _React$Component);

  function EuiButton() {
    _classCallCheck(this, EuiButton);

    _get(Object.getPrototypeOf(EuiButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(EuiButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root },
        this.props.label
      );
    }
  }]);

  return EuiButton;
})(_react2['default'].Component);

var RegularButton = (function (_React$Component2) {
  _inherits(RegularButton, _React$Component2);

  function RegularButton() {
    _classCallCheck(this, RegularButton);

    _get(Object.getPrototypeOf(RegularButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(RegularButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' regular' }),
        this.props.label
      );
    }
  }]);

  return RegularButton;
})(_react2['default'].Component);

var MainButton = (function (_React$Component3) {
  _inherits(MainButton, _React$Component3);

  function MainButton() {
    _classCallCheck(this, MainButton);

    _get(Object.getPrototypeOf(MainButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MainButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' ' + this.props.className + ' main' }),
        this.props.label
      );
    }
  }]);

  return MainButton;
})(_react2['default'].Component);

var CancelButton = (function (_React$Component4) {
  _inherits(CancelButton, _React$Component4);

  function CancelButton() {
    _classCallCheck(this, CancelButton);

    _get(Object.getPrototypeOf(CancelButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CancelButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: 'cancel ' + _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' ' + this.props.className }),
        this.props.label
      );
    }
  }]);

  return CancelButton;
})(_react2['default'].Component);

var DisabledButton = (function (_React$Component5) {
  _inherits(DisabledButton, _React$Component5);

  function DisabledButton() {
    _classCallCheck(this, DisabledButton);

    _get(Object.getPrototypeOf(DisabledButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DisabledButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' disabled' }),
        this.props.label
      );
    }
  }]);

  return DisabledButton;
})(_react2['default'].Component);

var TipButton = (function (_React$Component6) {
  _inherits(TipButton, _React$Component6);

  function TipButton() {
    _classCallCheck(this, TipButton);

    _get(Object.getPrototypeOf(TipButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TipButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' tip' }),
        this.props.label
      );
    }
  }]);

  return TipButton;
})(_react2['default'].Component);

var WarningButton = (function (_React$Component7) {
  _inherits(WarningButton, _React$Component7);

  function WarningButton() {
    _classCallCheck(this, WarningButton);

    _get(Object.getPrototypeOf(WarningButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WarningButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' warning' }),
        this.props.label
      );
    }
  }]);

  return WarningButton;
})(_react2['default'].Component);

var LoadingButton = (function (_React$Component8) {
  _inherits(LoadingButton, _React$Component8);

  function LoadingButton() {
    _classCallCheck(this, LoadingButton);

    _get(Object.getPrototypeOf(LoadingButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LoadingButton, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' loading' }),
        _react2['default'].createElement('span', { className: 'dot dot0' }),
        _react2['default'].createElement('span', { className: 'dot dot1' }),
        _react2['default'].createElement('span', { className: 'dot dot2' }),
        _react2['default'].createElement('span', { className: 'dot dot3' })
      );
    }
  }]);

  return LoadingButton;
})(_react2['default'].Component);

var CountingButton = (function (_React$Component9) {
  _inherits(CountingButton, _React$Component9);

  function CountingButton(arg0, arg1, arg2) {
    _classCallCheck(this, CountingButton);

    _get(Object.getPrototypeOf(CountingButton.prototype), 'constructor', this).call(this, arg0, arg1, arg2);
    this.state = {
      counting: true,
      current: this.props.from || 10
    };
  }

  _createClass(CountingButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.countDown();
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearTimeout(this.counttimer);
    }
  }, {
    key: 'countDown',
    value: function countDown() {
      var counting = this.state.counting;
      var current = this.state.current;
      if (current > this.props.to) {
        this.counttimer = setTimeout(this.countDown.bind(this), 1000);
      } else {
        counting = false;
      }
      if (counting > this.props.to) {
        this.setState({
          current: current - 1
        });
      }
      this.setState({
        counting: counting
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.counting) {
        return _react2['default'].createElement(
          'div',
          _extends({}, this.props, { className: _styleCss2['default'].root + ' ' + (this.props.theme || '') + ' counting' }),
          _react2['default'].createElement(
            'span',
            { className: 'count' },
            this.state.current
          )
        );
      } else {
        return _react2['default'].createElement(MainButton, this.props);
      }
    }
  }]);

  return CountingButton;
})(_react2['default'].Component);

var CustomButton = (function (_React$Component10) {
  _inherits(CustomButton, _React$Component10);

  function CustomButton() {
    _classCallCheck(this, CustomButton);

    _get(Object.getPrototypeOf(CustomButton.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CustomButton, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var newchildren = _react2['default'].Children.map(children, function (child) {
        return cloneElement(child, { className: 'custom-icon ' + (child.props.className || '') });
      });
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _styleCss2['default'].root + ' custom-button ' + (this.props.theme || '') + ' ' + (this.props.className || '') }),
        newchildren,
        _react2['default'].createElement(
          'span',
          { className: 'custom-label' },
          this.props.label
        )
      );
    }
  }]);

  return CustomButton;
})(_react2['default'].Component);

exports.EuiButton = EuiButton;
exports.RegularButton = RegularButton;
exports.MainButton = MainButton;
exports.CancelButton = CancelButton;
exports.DisabledButton = DisabledButton;
exports.LoadingButton = LoadingButton;
exports.CountingButton = CountingButton;
exports.TipButton = TipButton;
exports.WarningButton = WarningButton;
exports.CustomButton = CustomButton;