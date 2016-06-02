/**
 * 表情
 * 表情系列: 微博系列，微信系列，qq系列
 *
 *
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

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var BaseFace = (function (_React$Component) {
  _inherits(BaseFace, _React$Component);

  function BaseFace() {
    _classCallCheck(this, BaseFace);

    _get(Object.getPrototypeOf(BaseFace.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BaseFace, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].root, onClick: this.props.onClick },
        _react2['default'].createElement('img', { src: this.props.src })
      );
    }
  }]);

  return BaseFace;
})(_react2['default'].Component);

var face_map = {
  '[):]': 'ee_1',
  '[:D]': 'ee_2',
  '[;)]': 'ee_3',
  '[:-o]': 'ee_4',
  '[:p]': 'ee_5',
  '[(H)]': 'ee_6',
  '[:@]': 'ee_7',
  '[:s]': 'ee_8',
  '[:$]': 'ee_9',
  '[:(]': 'ee_10',
  '[:\'(]': 'ee_11',
  '[:|]': 'ee_12',
  '[(a)]': 'ee_13',
  '[8o|]': 'ee_14',
  '[8-|]': 'ee_15',
  '[+o(]': 'ee_16',
  '[<o)]': 'ee_17',
  '[|-)]': 'ee_18',
  '[*-)]': 'ee_19',
  '[:-#]': 'ee_20',
  '[:-*]': 'ee_21',
  '[^o)]': 'ee_22',
  '[8-)]': 'ee_23',
  '[(|)]': 'ee_24',
  '[(u)]': 'ee_25',
  '[(S)]': 'ee_26',
  '[(*)]': 'ee_27',
  '[(#)]': 'ee_28',
  '[(R)]': 'ee_29',
  '[({)]': 'ee_30',
  '[(})]': 'ee_31',
  '[(k)]': 'ee_32',
  '[(F)]': 'ee_33',
  '[(W)]': 'ee_34',
  '[(D)]': 'ee_35'
};

var Face = {
  All: function All() {
    var allfaces = Object.keys(face_map).map(function (key, index) {
      return _react2['default'].createElement(BaseFace, { key: index, src: 'http://sandbox.kefu.easemob.com/images/faces/' + face_map[key] + '.png' });
    });
    return _react2['default'].createElement(
      'div',
      null,
      allfaces
    );
  }

};

exports.BaseFace = BaseFace;
exports.Face = Face;