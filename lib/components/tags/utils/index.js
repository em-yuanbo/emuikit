'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function bondControls(children, matcher, replacer) {
  var newChildren = _react2['default'].Children.map(children, function (child) {
    if (_react2['default'].isValidElement(child)) {
      var newchild = null;
      if (matcher(child)) {
        newchild = replacer(child);
      } else {
        newchild = _react2['default'].cloneElement(child, { children: bondControls(child.props.children, matcher, replacer) });
      }
      return newchild;
    }
    return child;
  });
  return newChildren;
}
function replace(children, matcher, replacer) {
  return bondControls(children, matcher, replacer);
}

exports.replace = replace;