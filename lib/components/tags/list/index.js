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

var _virtuallist = require('../../virtuallist');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var cloneElement = _react2['default'].cloneElement;

//class ListBase extends React.Component {
//render(){
//return (
//<div>
//</div>
//);
//}
//}

var List = (function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
    this.state = { selectedIndex: this.props.selectedIndex };
  }

  _createClass(List, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.selectedIndex != this.state.selectedIndex;
    }
  }, {
    key: 'onSelect',
    value: function onSelect(child, index) {
      //console.log(React.Children.only(child));
      this.setState({ selectedIndex: index });
      if (this.props.onSelect) {
        this.props.onSelect(child.props, index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var children = this.props.children;

      var that = this;
      //console.log('selectedIndex:',this.state.selectedIndex);
      var newChildren = _react2['default'].Children.map(children, function (child, index) {
        //let newHandler;
        //if(child.props.onClick){
        //newHandler = function(){
        //console.log('click');
        //child.props.onClick(...arguments);
        //}
        //}else{
        //newHandler = function(){
        //console.log('click');
        //}
        //}
        return cloneElement(child, { itemClickHandler: _this.onSelect.bind(_this, child, index),
          selectedIndex: that.state.selectedIndex,
          index: index });
      });
      //console.log('newChildren',newChildren);
      var style = Object.assign({}, this.props.style);
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + (this.props.className || ''), style: style },
        newChildren
      );
    }
  }]);

  return List;
})(_react2['default'].Component);

var ListItem = (function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    _get(Object.getPrototypeOf(ListItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var selectedIndex = _props.selectedIndex;
      var index = _props.index;

      var currentClass = selectedIndex == index ? 'selected' : '';
      return _react2['default'].createElement(
        'div',
        { className: 'item ' + currentClass, onClick: this.props.itemClickHandler },
        this.props.children
      );
    }
  }]);

  return ListItem;
})(_react2['default'].Component);

List.Item = ListItem;

/**
 * 无限列表
 * 基于virtuallist
 */

var BigList = (function (_React$Component3) {
  _inherits(BigList, _React$Component3);

  function BigList(props) {
    _classCallCheck(this, BigList);

    _get(Object.getPrototypeOf(BigList.prototype), 'constructor', this).apply(this, arguments);
    this.state = {
      items: props.items,
      scrollDelay: 0,
      className: 'list',
      itemBuffer: props.itemBuffer,
      itemHeight: props.itemHeight
    };
    this.renderItem = props.itemRender;
  }

  _createClass(BigList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var items = _props2.items;
      var itemRender = _props2.itemRender;
      var itemHeight = _props2.itemHeight;
      var itemBuffer = _props2.itemBuffer;

      return _react2['default'].createElement(
        'div',
        { className: '' + this.props.className, style: { height: 400, 'overflowY': 'scroll', width: 200 } },
        _react2['default'].createElement(_virtuallist.VirtualList, { items: items, renderItem: itemRender, scrollDelay: 0, className: 'no', container: this, itemBuffer: 3, itemHeight: 40 })
      );
      return _react2['default'].createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return BigList;
})(_react2['default'].Component);

exports.List = List;
exports.ListItem = ListItem;
exports.BigList = BigList;