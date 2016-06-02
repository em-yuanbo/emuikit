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

var _ = require('../');

var _2 = require('./');

var _spacer = require('../../spacer');

var _button = require('../../button');

var _utils = require('../utils');

var DialogDemo = (function (_React$Component) {
  _inherits(DialogDemo, _React$Component);

  function DialogDemo() {
    _classCallCheck(this, DialogDemo);

    _get(Object.getPrototypeOf(DialogDemo.prototype), 'constructor', this).apply(this, arguments);
    this.onClick = this.onClick.bind(this);
    this.onSimpleAlert = this.onSimpleAlert.bind(this);
    this.onAlert = this.onAlert.bind(this);
    this.onSimplePrompt = this.onSimplePrompt.bind(this);
    this.onPrompt = this.onPrompt.bind(this);
    this.onSimpleConfirm = this.onSimpleConfirm.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  _createClass(DialogDemo, [{
    key: 'onClick',
    value: function onClick() {
      var that = this;
      var dialog = _react2['default'].createElement(
        _2.DialogBase,
        { title: 'dialog.title', onCancel: function () {
            console.log('dialog.canceled');
          }, onSubmit: function () {
            console.log('dialog.submited');
          }, onClose: function () {
            console.log('dialog.onclosed');
          } },
        _react2['default'].createElement(
          _2.DialogBase.Header,
          null,
          '自定义header/title/closebtn'
        ),
        _react2['default'].createElement(
          _2.DialogBase.Content,
          null,
          'dialog主体内容',
          _react2['default'].createElement(_button.MainButton, { label: 'dialog2', onClick: that.onClick }),
          _react2['default'].createElement(
            'div',
            null,
            '选择时间',
            _react2['default'].createElement(_.TimePicker, { time: new Date() })
          )
        ),
        _react2['default'].createElement(
          _2.DialogBase.StatusBar,
          null,
          'dialog状态状，默认没有'
        )
      );
      _utils.dispatcher.dispatch({ type: 'dialog-replace', content: dialog });
    }
  }, {
    key: 'onSimpleAlert',
    value: function onSimpleAlert() {
      var content = _react2['default'].createElement(
        'div',
        null,
        'content'
      );
      content = "simple alert";
      (0, _2.SimpleAlert)(content, 'title').then(function (result) {
        console.log('alert.result', result);
        // 关闭或者确定后的回调通知
      });
    }
  }, {
    key: 'onAlert',
    value: function onAlert() {
      var that = this;

      var alert = _react2['default'].createElement(
        _2.EmAlert,
        { title: 'dialog.title' },
        _react2['default'].createElement(
          _2.DialogBase.Header,
          null,
          '自定义header/title/closebtn'
        ),
        _react2['default'].createElement(
          _2.DialogBase.Content,
          null,
          'prompt主体内容',
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { style: { height: 200, overflow: 'hidden', textAlign: 'center' } },
            _react2['default'].createElement('img', { src: 'http://ww4.sinaimg.cn/mw690/83f283e6gw1f44bun3ilmj20rs0ku12b.jpg',
              style: { maxWidth: '100%', maxHeight: '100%' }
            })
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(_button.MainButton, { label: 'button' })
        )
      );
      _2.EmAlert.show(alert).then(function (result) {
        console.log('alert.result', result);
      });
    }
  }, {
    key: 'onConfirm',
    value: function onConfirm() {
      var confirm = _react2['default'].createElement(
        _2.Confirm,
        null,
        _react2['default'].createElement(
          _2.DialogBase.Header,
          null,
          'title.confirm'
        ),
        _react2['default'].createElement(
          _2.DialogBase.Content,
          null,
          '我确认xxxxx',
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { style: { height: 200, overflow: 'hidden', textAlign: 'center' } },
            _react2['default'].createElement('img', { src: 'http://ww4.sinaimg.cn/mw690/83f283e6gw1f44bun3ilmj20rs0ku12b.jpg',
              style: { maxWidth: '100%', maxHeight: '100%' }
            })
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null)
        )
      );
      _2.DialogBase.show(confirm).then(function (result) {
        console.log('confirm.result', result);
      });
    }
  }, {
    key: 'onSimpleConfirm',
    value: function onSimpleConfirm() {
      (0, _2.SimpleConfirm)('are you sure?', 'simpleconfirm title').then(function (result) {
        console.log('simpleconfirm.result', result);
      });
    }
  }, {
    key: 'onPrompt',
    value: function onPrompt() {
      // dref, getValue
      var prompt = _react2['default'].createElement(
        _2.Prompt,
        { getValue: function (refs) {
            return refs.promptinput.value;
          } },
        _react2['default'].createElement(
          _2.DialogBase.Header,
          null,
          'prompt.title'
        ),
        _react2['default'].createElement(
          _2.DialogBase.Content,
          null,
          'prompt.content',
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('input', { dref: 'promptinput' })
          )
        )
      );
      _2.DialogBase.show(prompt).then(function (result) {
        console.log('prompt.result', result);
      });
    }
  }, {
    key: 'onSimplePrompt',
    value: function onSimplePrompt() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_button.MainButton, { label: 'simplealert', onClick: this.onSimpleAlert }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'alert', onClick: this.onAlert }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'simpleconfirm', onClick: this.onSimpleConfirm }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'confirm', onClick: this.onConfirm }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'Simpleprompt', onClick: this.onSimplePrompt }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'prompt', onClick: this.onPrompt }),
        _react2['default'].createElement(_spacer.EmSpacer, null),
        _react2['default'].createElement(_button.MainButton, { label: 'dialog', onClick: this.onClick }),
        _react2['default'].createElement(_spacer.EmSpacer, null)
      );
    }
  }]);

  return DialogDemo;
})(_react2['default'].Component);

exports.DialogDemo = DialogDemo;