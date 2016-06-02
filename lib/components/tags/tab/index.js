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

var Tab = (function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).apply(this, arguments);
    this.state = { selectedId: this.props.defaultActive, currentTab: null };
    this.onTabItemClick = this.onTabItemClick.bind(this);
  }

  _createClass(Tab, [{
    key: 'onTabItemClick',
    value: function onTabItemClick(id, e) {
      this.setState({ selectedId: id });
    }
  }, {
    key: 'getHeadersAndViews',
    value: function getHeadersAndViews(children) {
      var _this = this;

      var heads = [];
      var views = [];
      var selectedId = this.state.selectedId;
      var currentIndex = 0;

      _react2['default'].Children.forEach(children, function (item, index) {
        var cs = item.props.children;
        var head = null;
        var view = [];
        var id = item.props.id || index;
        if (id == selectedId) {
          currentIndex = index;
        }

        _react2['default'].Children.forEach(cs, function (_child) {
          //get header
          if (_child.type == ItemHeader) {
            head = _react2['default'].createElement(
              'li',
              { onClick: function () {
                  return _this.onTabItemClick(id);
                }, className: 'tab-item ' + (id == selectedId ? 'active' : ''), key: index },
              _react2['default'].createElement(
                'div',
                { className: 'tab-item-inner' },
                _child.props.children
              )
            );
          } else {
            view.push(_child);
          }
        });

        if (!head && view) {
          head = _react2['default'].createElement(
            'li',
            { onClick: function () {
                return _this.onTabItemClick(id);
              }, className: 'tab-item ' + (id == selectedId ? 'active' : ''), key: index },
            _react2['default'].createElement(
              'div',
              { className: 'tab-item-inner' },
              item.props.header || ''
            )
          );
        }

        heads.push(head);
        views.push(view);
      });

      return { heads: heads, views: views, currentView: views[currentIndex] };
    }
  }, {
    key: 'render',
    value: function render() {
      // 收集headers,
      // 计算currentTab
      var props = this.props;
      var children = props.children;
      var parsed = this.getHeadersAndViews(children);
      var heads = parsed.heads;
      var views = parsed.views;
      var currentTab = parsed.currentView;

      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].root + ' ' + (props.className || '') },
        _react2['default'].createElement(
          'div',
          { className: 'tab-header' },
          _react2['default'].createElement(
            'ul',
            null,
            heads
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'tab-content' },
          currentTab
        )
      );
    }
  }]);

  return Tab;
})(_react2['default'].Component);

var TabItem = (function (_React$Component2) {
  _inherits(TabItem, _React$Component2);

  function TabItem() {
    _classCallCheck(this, TabItem);

    _get(Object.getPrototypeOf(TabItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TabItem, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return TabItem;
})(_react2['default'].Component);

var ItemHeader = (function (_React$Component3) {
  _inherits(ItemHeader, _React$Component3);

  function ItemHeader() {
    _classCallCheck(this, ItemHeader);

    _get(Object.getPrototypeOf(ItemHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ItemHeader, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ItemHeader;
})(_react2['default'].Component);

Tab.ItemHeader = ItemHeader;
Tab.Item = TabItem;

exports.Tab = Tab;