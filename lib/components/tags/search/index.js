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

var _icon = require('../icon');

var _button = require('../button');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var Search = (function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
    this.state = { showClearButton: false, key: '' };
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  //function SearchWithButton (props){
  //return (<Search {...props} widthButton={true}/>);
  //}

  _createClass(Search, [{
    key: 'onChange',
    value: function onChange() {
      var key = this.refs.keyword.value;
      this.setState({ key: key, showClearButton: key.length > 0 });
      if (this.props.onUserInputChange) {
        this.props.onUserInputChange(key);
      }
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      this.setState({ key: '', showClearButton: false });
      this.refs.keyword.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var clearButton = null;
      var withButton = this.props.withButton;
      var classButton = withButton ? 'with-button' : '';
      if (this.state.showClearButton) {
        clearButton = _react2['default'].createElement(_icon.Icon.Cancel, { className: 'search-clear', onClick: this.onClear });
      }

      //TODO label /button 由外部传入，props.children,添加className和onClick 参考react-router的实现
      return _react2['default'].createElement(
        'div',
        { className: (this.props.className || '') + ' ' + _styleCss2['default'].root + ' ' + classButton, onClick: this.onClick },
        _react2['default'].createElement(_icon.Icon.Search, { className: 'search-icon' }),
        _react2['default'].createElement('input', { className: 'keyword', ref: 'keyword', value: this.state.key, placeholder: this.props.placeholder || 'search', onChange: this.onChange }),
        clearButton,
        withButton && _react2['default'].createElement(_button.MainButton, { className: 'search-button', label: 'search' })
      );
    }
  }]);

  return Search;
})(_react2['default'].Component);

exports.SearchBox = Search;