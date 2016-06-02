//require('normalize.css/normalize.css');
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

//import update from 'react/lib/update.js';
//

var _2 = require('../');

var _componentsTagsPopupDialogDemoJs = require('./components/tags/popup/dialog/demo.js');

//import {Tab} from './tags/tab';

//import {DropDown, TimePicker } from './tags/popup';

//import {List,BigList} from './tags/list';

//import {Face} from './tags/face';

//import {Avatar} from './tags/avatar';
//import {Status as AvatarStatus} from './tags/avatar/status';
//import {ChannelIcon} from './tags/channel';

//import {SearchBox} from './tags/search';

var _componentsTagsForm = require('./components/tags/form');

//import {Loading, ProgressBar} from './tags/loading';

//import {EmSpacer as Spacer} from './tags/spacer';
//import {Icon} from './tags/icon';
//import {Switcher} from './tags/toggle/switcher';

//import {ToggleTag} from './tags/toggle/tag';
//import {ToggleButton} from './tags/toggle/tagbutton';

//import {Checkbox,CheckboxWithoutBackground} from './tags/toggle/checkbox';

//import { MainButton, RegularButton, CancelButton, DisabledButton, LoadingButton, CountingButton, TipButton, WarningButton, CustomButton} from './tags/button';

var styles = require('styles/App.css');

window.React = _react2['default'];
var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '', style: { height: 40, lineHeight: '40px', fontSize: 16, textIndent: 20, backgroundColor: 'rgb(242, 242, 242)' } },
        this.props.children
      );
    }
  }]);

  return Header;
})(_react2['default'].Component);

var AppComponent = (function (_React$Component2) {
  _inherits(AppComponent, _React$Component2);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    _get(Object.getPrototypeOf(AppComponent.prototype), 'constructor', this).apply(this, arguments);
    var list = Array.from(new Array(30)).map(function (_, i) {
      return { index: i, label: 'label ' + i };
    });
    this.state = { progress: 20, list: list };
  }

  _createClass(AppComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      this.interval = setInterval(function () {
        that.setState({ progress: Math.random() * 100 });
        //clearInterval(that.interval);
      }, 3000);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      clearTimeout(this.interval);
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage(props) {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_2.Avatar, null),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'p',
            null,
            'nicename'
          ),
          _react2['default'].createElement(
            'div',
            null,
            'hello',
            props.index
          )
        )
      );
    }
  }, {
    key: 'itemRender',
    value: function itemRender(props) {
      return _react2['default'].createElement(
        'li',
        { style: { height: 40 }, key: props.index },
        'props.li ',
        props.index
      );
    }
  }, {
    key: 'onChangeTab',
    value: function onChangeTab() {
      console.log('onChangeTab');
    }
  }, {
    key: 'onDialogOpen',
    value: function onDialogOpen() {
      console.log('onDialogOpen');
      alert('dialog');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: styles.root, style: { position: 'relative', padding: 10 } },
        _react2['default'].createElement(
          Header,
          null,
          'dialog'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_componentsTagsPopupDialogDemoJs.DialogDemo, null),
        _react2['default'].createElement(_2.MainButton, { label: 'dialog', onClick: this.onDialogOpen }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'popup'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '在线状态:'
          ),
          _react2['default'].createElement(_2.DropDown.OnLineStatus, null)
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          null,
          '选择时间',
          _react2['default'].createElement(_2.TimePicker, { time: new Date() })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'form '
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_componentsTagsForm.FormDemo, { ref: 'form' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_componentsTagsForm.FormDemo2, { ref: 'form2' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'form inputs - radiogroups'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          null,
          '性别：',
          _react2['default'].createElement(_2.Radio, { name: 'gender', checked: true, value: 'male' }),
          ' 男',
          _react2['default'].createElement(_2.Radio, { name: 'gender', value: 'female' }),
          ' 女'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: {} },
          '人数：',
          _react2['default'].createElement(_2.Radio, { name: 'amount', value: '0' }),
          ' ',
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '0-100'
          ),
          _react2['default'].createElement(_2.Radio, { name: 'amount', checked: true, value: '1' }),
          ' ',
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '100-500'
          ),
          _react2['default'].createElement(_2.Radio, { name: 'amount', value: '2' }),
          ' ',
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '500+'
          )
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '工作时:'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', defaultValue: true, value: '周一' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周一'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', defaultValue: true, value: '周二' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周二'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', defaultValue: true, value: '周三' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周三'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', defaultValue: true, value: '周四' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周四'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', defaultValue: true, value: '周五' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周五'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', value: '周六' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周六'
          ),
          _react2['default'].createElement(_2.Checkbox, { name: 'workday', value: '周日' }),
          _react2['default'].createElement(
            'span',
            { style: { marginRight: 10 } },
            '周日'
          )
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'tab'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.Tab,
          { className: 'tab-demo', onChange: this.onChangeTab, defaultActive: 'a' },
          _react2['default'].createElement(
            _2.Tab.Item,
            { id: 'a' },
            _react2['default'].createElement(
              _2.Tab.ItemHeader,
              null,
              _react2['default'].createElement(
                'div',
                { className: 'item-header' },
                'item.1',
                _react2['default'].createElement(
                  'span',
                  { className: 'icon' },
                  this.state.progress | 0
                )
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'page-0', type: _2.Tab.Item },
              'page0',
              _react2['default'].createElement(
                'div',
                null,
                '选择时间',
                _react2['default'].createElement(_2.TimePicker, { time: new Date() })
              )
            )
          ),
          _react2['default'].createElement(
            _2.Tab.Item,
            { id: 'b', header: 'item.2' },
            _react2['default'].createElement(
              'div',
              { className: 'page-1', type: _2.Tab.Item },
              'page1',
              _react2['default'].createElement(
                _2.List,
                { onSelect: function () {}, style: {} },
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(_2.Avatar, { key: 1, onClick: function () {} }),
                  _react2['default'].createElement(
                    'div',
                    { onClick: function () {} },
                    ' haha '
                  )
                ),
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(
                    _2.Avatar,
                    null,
                    _react2['default'].createElement(_2.AvatarStatus.OnLine, { className: 'avatar-status' })
                  )
                ),
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(
                    _2.Avatar,
                    null,
                    _react2['default'].createElement(_2.ChannelIcon.Weibo, null)
                  )
                ),
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(
                    _2.Avatar,
                    null,
                    _react2['default'].createElement(_2.ChannelIcon.Weibo, null)
                  )
                ),
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(
                    _2.Avatar,
                    null,
                    _react2['default'].createElement(_2.AvatarStatus.OnLine, { className: 'avatar-status' })
                  )
                ),
                _react2['default'].createElement(
                  _2.List.Item,
                  null,
                  _react2['default'].createElement(_2.Avatar, null)
                )
              )
            )
          ),
          _react2['default'].createElement(
            _2.Tab.Item,
            { id: 'c', header: 'item.3' },
            _react2['default'].createElement(
              'div',
              { className: 'page-2', type: _2.Tab.Item },
              'page2'
            ),
            _react2['default'].createElement(
              'div',
              { style: { width: 300 } },
              _react2['default'].createElement(_2.SearchBox, { placeholder: 'search', withButton: true })
            )
          ),
          _react2['default'].createElement(
            _2.Tab.Item,
            { id: 'd', header: 'nested' },
            'nested'
          )
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'list'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.List,
          { onSelect: function () {}, style: { width: 300 } },
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(_2.Avatar, { key: 1, onClick: function () {} }),
            _react2['default'].createElement(
              'div',
              { onClick: function () {} },
              ' haha '
            )
          ),
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(
              _2.Avatar,
              null,
              _react2['default'].createElement(_2.AvatarStatus.OnLine, { className: 'avatar-status' })
            )
          ),
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(
              _2.Avatar,
              null,
              _react2['default'].createElement(_2.ChannelIcon.Weibo, null)
            )
          ),
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(
              _2.Avatar,
              null,
              _react2['default'].createElement(_2.ChannelIcon.Weibo, null)
            )
          ),
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(
              _2.Avatar,
              null,
              _react2['default'].createElement(_2.AvatarStatus.OnLine, { className: 'avatar-status' })
            )
          ),
          _react2['default'].createElement(
            _2.List.Item,
            null,
            _react2['default'].createElement(_2.Avatar, null)
          )
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'unLimited List'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.BigList, { items: this.state.list, itemRender: this.itemRender, itemHeight: 30, itemBuffer: 4 }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'Face'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Face.All, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'Avatar'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Avatar, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Avatar.Small, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.Avatar,
          null,
          _react2['default'].createElement(_2.AvatarStatus.OnLine, { className: 'avatar-status' })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.Avatar,
          null,
          _react2['default'].createElement(_2.ChannelIcon.Weibo, null)
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'loading'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: { width: 200, height: 20 } },
          _react2['default'].createElement(_2.ProgressBar, { start: 20, progress: this.state.progress })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: { width: 200, height: 20 } },
          _react2['default'].createElement(_2.Loading, null)
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'text input'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: { width: 200, height: 60 } },
          _react2['default'].createElement(_2.EmInput, { placeholder: 'input' })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'search'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: { width: 300 } },
          _react2['default'].createElement(_2.SearchBox, { placeholder: 'search', withButton: true })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          { style: { width: 300 } },
          _react2['default'].createElement(_2.SearchBox, { placeholder: 'search', withButton: false })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'toggled'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.ToggleButton, { content: 'Toggle button' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.ToggleTag, { content: 'Toggle Tag' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Checkbox, { label: 'Check0' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.CheckboxWithoutBackground, { label: 'Check0', defaultValue: true }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Checkbox, { label: 'Check0', defaultValue: true }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Switcher, { defaultValue: true }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'buttons'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.CustomButton,
          { theme: 'big main', label: 'main' },
          _react2['default'].createElement(_2.Icon.Cancel, { className: 'icon-' })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.CustomButton,
          { theme: 'main', label: 'add' },
          _react2['default'].createElement(_2.Icon.Add, { className: 'icon-add' })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          _2.CustomButton,
          { theme: 'main', label: 'unfold' },
          _react2['default'].createElement(_2.Icon.Minus, { className: 'icon-add' })
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.MainButton, { label: 'main' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.RegularButton, { label: 'Regular' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.CancelButton, { label: 'Cancel' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.DisabledButton, { label: 'Disabled' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.LoadingButton, { label: 'Loading' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.CountingButton, { label: 'Done', from: 10, to: -1 }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.TipButton, { label: 'Tip' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.WarningButton, { label: 'Warning' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          'div',
          null,
          'Big'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.MainButton, { theme: 'big', label: 'main' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.RegularButton, { theme: 'big', label: 'Regular' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.CancelButton, { theme: 'big', label: 'Cancel' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.DisabledButton, { theme: 'big', label: 'Disabled' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.LoadingButton, { theme: 'big', label: 'Loading' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.CountingButton, { theme: 'big', label: 'Done', from: 10, to: 0 }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.TipButton, { theme: 'big', label: 'Tip' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.WarningButton, { theme: 'big', label: 'Warning' }),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(
          Header,
          null,
          'icon'
        ),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Icon.Edit, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Icon.Cancel, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Icon.Drag, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Icon.Minus, null),
        _react2['default'].createElement(_2.Spacer, null),
        _react2['default'].createElement(_2.Icon.Add, null),
        _react2['default'].createElement(_2.Spacer, null)
      );
    }
  }]);

  return AppComponent;
})(_react2['default'].Component);

AppComponent.defaultProps = {};

exports['default'] = AppComponent;
module.exports = exports['default'];