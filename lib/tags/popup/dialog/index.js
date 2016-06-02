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

var _icon = require('../../icon');

var _button = require('../../button');

var _utils = require('../../utils');

var _utils2 = require('./../utils');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var DialogBase = (function (_React$Component) {
  _inherits(DialogBase, _React$Component);

  function DialogBase() {
    var _this = this;

    _classCallCheck(this, DialogBase);

    _get(Object.getPrototypeOf(DialogBase.prototype), 'constructor', this).apply(this, arguments);
    this.onClickClose = this.onClickClose.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    var newchildren = (0, _utils.replace)(this.props.children, function (child) {
      return child.type == DialogStatusBar || child.type == DialogCancel || child.type == DialogSubmit;
    }, function (child) {
      //console.log('replaced',child.type);
      if (child.type == DialogStatusBar) {
        return _react2['default'].cloneElement(child, { onCancel: _this.onCancel, onSubmit: _this.onSubmit });
      } else if (child.type == DialogCancel) {
        return _react2['default'].cloneElement(child, { onClick: _this.onCancel });
      } else if (child.type == DialogSubmit) {
        return _react2['default'].cloneElement(child, { onClick: _this.onSubmit });
      }
    });
    this.state = { newchildren: newchildren };
  }

  _createClass(DialogBase, [{
    key: 'onCancel',
    value: function onCancel() {
      console.log('onCancel');
      _utils2.dispatcher.dispatch({ type: 'destroy', layer: this.props.layer });
      if (this.props.onCancel) {
        this.props.onCancel();
      }
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('onSubmit');
      _utils2.dispatcher.dispatch({ type: 'destroy', layer: this.props.layer });
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'onClickClose',
    value: function onClickClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
      _utils2.dispatcher.dispatch({
        type: 'destroy',
        layer: this.props.layer
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var topClass = this.props.top ? 'dialog-top' : '';
      // 找到 submit/cancel,
      // 绑定onClick
      console.log(this.props.children);
      var closeButton = this.props.noCloseButton ? null : _react2['default'].createElement(_icon.Icon.Cancel, { onClick: this.onClickClose, className: 'close-btn' });

      return _react2['default'].createElement(
        'div',
        { className: topClass + ' ' + _styleCss2['default'].dialogwrapper },
        _react2['default'].createElement(
          'div',
          { className: _styleCss2['default'].dialogbase + ' dialogbase' },
          this.state.newchildren,
          closeButton
        )
      );
    }
  }]);

  return DialogBase;
})(_react2['default'].Component);

var DialogHeader = (function (_React$Component2) {
  _inherits(DialogHeader, _React$Component2);

  function DialogHeader() {
    _classCallCheck(this, DialogHeader);

    _get(Object.getPrototypeOf(DialogHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DialogHeader, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].dialogheader },
        this.props.children
      );
    }
  }]);

  return DialogHeader;
})(_react2['default'].Component);

var DialogContent = (function (_React$Component3) {
  _inherits(DialogContent, _React$Component3);

  function DialogContent() {
    _classCallCheck(this, DialogContent);

    _get(Object.getPrototypeOf(DialogContent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DialogContent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].dialogcontent },
        this.props.children
      );
    }
  }]);

  return DialogContent;
})(_react2['default'].Component);

var DialogStatusBar = (function (_React$Component4) {
  _inherits(DialogStatusBar, _React$Component4);

  function DialogStatusBar() {
    _classCallCheck(this, DialogStatusBar);

    _get(Object.getPrototypeOf(DialogStatusBar.prototype), 'constructor', this).apply(this, arguments);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(DialogStatusBar, [{
    key: 'onCancel',
    value: function onCancel() {
      console.log('onCancel.statusbar');
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('onSubmit.statusbar');
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var cancelButton = !this.props.buttons || this.props.buttons && this.props.buttons.cancel ? _react2['default'].createElement(DialogCancel, { onClick: this.onCancel }) : null;

      var submitButton = !this.props.buttons || this.props.buttons && this.props.buttons.submit ? _react2['default'].createElement(DialogSubmit, { onClick: this.onSubmit }) : null;

      return _react2['default'].createElement(
        'div',
        { className: '' + _styleCss2['default'].dialogstatusbar },
        this.props.children,
        cancelButton,
        submitButton
      );
    }
  }]);

  return DialogStatusBar;
})(_react2['default'].Component);

var DialogSubmit = (function (_React$Component5) {
  _inherits(DialogSubmit, _React$Component5);

  function DialogSubmit() {
    _classCallCheck(this, DialogSubmit);

    _get(Object.getPrototypeOf(DialogSubmit.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DialogSubmit, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_button.MainButton, { className: 'dialog-submit', label: 'ok', onClick: this.props.onClick });
    }
  }]);

  return DialogSubmit;
})(_react2['default'].Component);

var DialogCancel = (function (_React$Component6) {
  _inherits(DialogCancel, _React$Component6);

  function DialogCancel() {
    _classCallCheck(this, DialogCancel);

    _get(Object.getPrototypeOf(DialogCancel.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DialogCancel, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_button.CancelButton, { className: 'dialog-cancel', label: 'cancel', onClick: this.props.onClick });
    }
  }]);

  return DialogCancel;
})(_react2['default'].Component);

DialogBase.Header = DialogHeader;
DialogBase.StatusBar = DialogStatusBar;
DialogBase.Content = DialogContent;

var Confirm = (function (_React$Component7) {
  _inherits(Confirm, _React$Component7);

  function Confirm() {
    _classCallCheck(this, Confirm);

    _get(Object.getPrototypeOf(Confirm.prototype), 'constructor', this).apply(this, arguments);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  _createClass(Confirm, [{
    key: 'onCancel',
    value: function onCancel() {
      console.log('confirm.onCancel');
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('confirm.onSubmit');
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (!title && child.type == DialogHeader) {
          title = child;
        }
      });
      if (!title) {
        title = _react2['default'].createElement(
          DialogHeader,
          null,
          this.props.title || 'alert'
        );
      }
      var content = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (child.type == DialogContent) {
          content = child.props.children;
        }
      });
      return _react2['default'].createElement(
        DialogBase,
        _extends({}, this.props, { noCloseButton: true, onCancel: this.onCancel, onSubmit: this.onSubmit }),
        title,
        _react2['default'].createElement(
          DialogContent,
          null,
          content
        ),
        _react2['default'].createElement(DialogStatusBar, { buttons: { submit: 1, cancel: 1 } })
      );
    }
  }]);

  return Confirm;
})(_react2['default'].Component);

Confirm.show = function (com) {
  var _resolve, _reject;
  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });
  function onClose() {
    _resolve({ type: 'close' });
  }
  function onCancel() {
    _resolve({ type: 'cancel' });
  }
  function onSubmit() {
    _resolve({ type: 'submit' });
  }
  var _com = _react2['default'].cloneElement(com, { onClose: onClose, onCancel: onCancel, onSubmit: onSubmit });
  _utils2.dispatcher.dispatch({ type: 'dialog-push', content: _com });
  return promise;
};

var EmAlert = (function (_React$Component8) {
  _inherits(EmAlert, _React$Component8);

  function EmAlert() {
    _classCallCheck(this, EmAlert);

    _get(Object.getPrototypeOf(EmAlert.prototype), 'constructor', this).apply(this, arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(EmAlert, [{
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('alert.onSubmit');
      if (this.props.onSubmit) {
        this.props.onSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (!title && child.type == DialogHeader) {
          title = child;
        }
      });
      if (!title) {
        title = _react2['default'].createElement(
          DialogHeader,
          null,
          this.props.title || 'alert'
        );
      }
      var content = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (child.type == DialogContent) {
          content = child.props.children;
        }
      });
      return _react2['default'].createElement(
        DialogBase,
        _extends({}, this.props, { noCloseButton: true, onSubmit: this.onSubmit }),
        title,
        _react2['default'].createElement(
          DialogContent,
          null,
          content
        ),
        _react2['default'].createElement(DialogStatusBar, { buttons: { submit: 1, cancel: 0 } })
      );
    }
  }]);

  return EmAlert;
})(_react2['default'].Component);

EmAlert.show = function (com) {
  var _resolve, _reject;
  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });
  function onClose(r) {
    _resolve({ type: 'close' });
  }
  function onCancel() {
    _resolve({ type: 'cancel' });
  }
  function onSubmit(result) {
    _resolve(Object.assign({ type: 'submit' }, result));
  }
  var _com = _react2['default'].cloneElement(com, { onClose: onClose, onCancel: onCancel, onSubmit: onSubmit });
  _utils2.dispatcher.dispatch({ type: 'dialog-push', content: _com });
  return promise;
};
DialogBase.show = EmAlert.show;

var Panel = (function (_DialogBase) {
  _inherits(Panel, _DialogBase);

  function Panel() {
    _classCallCheck(this, Panel);

    _get(Object.getPrototypeOf(Panel.prototype), 'constructor', this).apply(this, arguments);
  }

  return Panel;
})(DialogBase);

function SimpleAlert(content, title) {
  var _resolve, _reject;
  function onClose() {
    _resolve({ type: 'close' });
  }
  function onSubmit() {
    _resolve({ type: 'submit' });
  }
  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });
  var alert = _react2['default'].createElement(
    EmAlert,
    { title: 'dialog.title', onClose: onClose, onSubmit: onSubmit },
    _react2['default'].createElement(
      DialogBase.Header,
      null,
      title
    ),
    _react2['default'].createElement(
      DialogBase.Content,
      null,
      content
    )
  );
  _utils2.dispatcher.dispatch({ type: 'dialog-push', content: alert });
  return promise;
}
function SimpleConfirm(content, title) {
  // return promise=>true/false
  var _resolve, _reject;
  function onCancel() {
    _resolve({ type: 'cancel' });
  }
  function onSubmit() {
    _resolve({ type: 'submit' });
  }
  var promise = new Promise(function (resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });
  var alert = _react2['default'].createElement(
    Confirm,
    { onCancel: onCancel, onSubmit: onSubmit },
    _react2['default'].createElement(
      DialogBase.Header,
      null,
      title
    ),
    _react2['default'].createElement(
      DialogBase.Content,
      null,
      content
    )
  );
  _utils2.dispatcher.dispatch({ type: 'dialog-push', content: alert });
  return promise;
}

var Prompt = (function (_DialogBase2) {
  _inherits(Prompt, _DialogBase2);

  function Prompt() {
    _classCallCheck(this, Prompt);

    _get(Object.getPrototypeOf(Prompt.prototype), 'constructor', this).apply(this, arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(Prompt, [{
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('alert.onSubmit');
      var refs = {
        promptinput: {
          value: 'hahaha'
        }
      };
      var value = this.props.getValue(refs);
      if (this.props.onSubmit) {
        this.props.onSubmit({ value: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (!title && child.type == DialogHeader) {
          title = child;
        }
      });
      if (!title) {
        title = _react2['default'].createElement(
          DialogHeader,
          null,
          this.props.title || 'alert'
        );
      }
      var content = null;
      _react2['default'].Children.forEach(this.props.children, function (child) {
        if (child.type == DialogContent) {
          content = child.props.children;
        }
      });
      return _react2['default'].createElement(
        DialogBase,
        _extends({}, this.props, { noCloseButton: true, onSubmit: this.onSubmit }),
        title,
        _react2['default'].createElement(
          DialogContent,
          null,
          content
        ),
        _react2['default'].createElement(DialogStatusBar, { buttons: { submit: 1, cancel: 1 } })
      );
    }
  }]);

  return Prompt;
})(DialogBase);

function SimplePrompt(title) {}

//import {DialogLayer} from './layer';

exports.DialogBase = DialogBase;
exports.SimplePrompt = SimplePrompt;
exports.SimpleConfirm = SimpleConfirm;
exports.SimpleAlert = SimpleAlert;
exports.EmAlert = EmAlert;
exports.Prompt = Prompt;
exports.Confirm = Confirm;