'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('core-js/fn/object/assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Main = require('./Main');

var _Main2 = _interopRequireDefault(_Main);

var _componentsTagsPopup = require('./components/tags/popup');

var _demo = require('./demo');

//import {DialogLayer, DialogPopLayer} from './components/tags/dialog';

// Render the main component into the dom
_reactDom2['default'].render(_react2['default'].createElement(_Main2['default'], null), document.getElementById('app'));
_reactDom2['default'].render(_react2['default'].createElement(_componentsTagsPopup.PopLayer, null), document.getElementById('app-pop'));
//ReactDOM.render(<DialogLayer />, document.getElementById('app-dialog'));
//ReactDOM.render(<DialogPopLayer />, document.getElementById('app-dialog-pop'));
_reactDom2['default'].render(_react2['default'].createElement(_demo.Demo, null), document.getElementById('demo'));