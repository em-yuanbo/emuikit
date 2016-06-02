/**
 * TODO
 * validation
 * focus, onChange, onFocus.
 * isValidate()
 * showError
 * shouldUpdate
 * propsReceived
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('./input');

var _radio = require('./radio');

var _toggleCheckbox = require('../toggle/checkbox');

var _toggleSwitcher = require('../toggle/switcher');

var _utils = require('../utils');

var _button = require('../button');

var _spacer = require('../spacer');

var _styleCss = require('./style.css');

var _styleCss2 = _interopRequireDefault(_styleCss);

var _utils2 = require('./utils/');

var required = _utils2.validation.required;
var maxlength = _utils2.validation.maxlength;
var range = _utils2.validation.range;
var email = _utils2.validation.email;

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _this = this;

    _classCallCheck(this, Form);

    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, arguments);
    this.onSubmit = this.onSubmit.bind(this);
    this.controls = {};
    // rebond;
    //var newchildren = this.bondControls(this.props.children);
    var newchildren = (0, _utils.replace)(this.props.children, function (child) {
      return child.type.canBindForm && child.type.canBindForm(_this);
    }, function (child) {
      var props = {};
      props.form = _this;
      return _react2['default'].cloneElement(child, props);
    });
    this.state = { newChildren: newchildren };
  }

  _createClass(Form, [{
    key: 'onSubmit',
    value: function onSubmit() {
      var data = this.collectForm();
      console.log('data', data);
    }
  }, {
    key: 'collectForm',
    value: function collectForm() {
      var controls = this.controls;
      var keys = Object.keys(controls);
      var datas = {};
      debugger;
      keys.forEach(function (key) {
        var c = controls[key];
        var value;
        if (Array.isArray(c)) {
          value = c.map(function (_c) {
            return _c.getValue();
          }).filter(function (v) {
            return v != null;
          });
          //value = controls[key].getValue();
        } else {
            value = c.getValue();
          }
        datas[key] = value;
      });
      return datas;
    }
  }, {
    key: 'register',
    value: function register(control) {
      var name = control.props.name;
      console.log('register', name, control);
      var temp = _defineProperty({}, name, this.controls[name]);
      var r = control.register(temp);
      //this.controls = Object.assign(this.controls,r);
      this.controls[name] = r[name];
      //this.controls[name]=control;
    }
  }, {
    key: 'render',
    value: function render() {

      //this.state.newChildren
      return _react2['default'].createElement(
        'div',
        { className: _styleCss2['default'].form + ' ' + this.props.className },
        this.state.newChildren
      );
    }
  }]);

  return Form;
})(_react2['default'].Component);

var FormDemo = (function (_React$Component2) {
  _inherits(FormDemo, _React$Component2);

  function FormDemo() {
    _classCallCheck(this, FormDemo);

    _get(Object.getPrototypeOf(FormDemo.prototype), 'constructor', this).apply(this, arguments);
    this.state = { data: {} };
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(FormDemo, [{
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('onsubmit', this.refs);
      var datas = this.refs.form.collectForm();
      console.log(datas);
      this.setState({ data: datas });
    }
  }, {
    key: 'render',
    value: function render() {
      var _validation = {
        'email': [required('email or phone is required')],
        'validate phone number': [required('email or phone is required'), range(1, 10, 'between 1 and 10')]
      };
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          Form,
          { ref: 'form' },
          _react2['default'].createElement(
            'div',
            null,
            'demo'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label', ref: 'label' },
              'Email:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_input.EmInput, { validation: [required('email required'), maxlength(10, 'maxlength 10')], ref: 'email', name: 'email', placeholder: 'email' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              'Password:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_input.EmInput, { validation: _validation, ref: 'password', name: 'password', type: 'password', placeholder: 'password' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              'gender:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_radio.Radio, { ref: 'gender1', name: 'gender1', checked: true, value: 'male' }),
              ' 男',
              _react2['default'].createElement(_radio.Radio, { name: 'gender1', value: 'female' }),
              ' 女'
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              '工作时:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周一' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周一'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周二' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周二'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周三' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周三'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周四' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周四'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周五' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周五'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', value: '周六' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周六'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', value: '周日' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周日'
              )
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              '开关:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_toggleSwitcher.Switcher, { name: 'switch', defaultValue: true })
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(_button.MainButton, { type: 'submit', onClick: this.onSubmit, label: 'submit' })
          )
        ),
        _react2['default'].createElement(
          'div',
          null,
          JSON.stringify(this.state.data)
        )
      );
    }
  }, {
    key: 'data',
    value: function data() {}
  }]);

  return FormDemo;
})(_react2['default'].Component);

var FormDemo2 = (function (_React$Component3) {
  _inherits(FormDemo2, _React$Component3);

  function FormDemo2() {
    _classCallCheck(this, FormDemo2);

    _get(Object.getPrototypeOf(FormDemo2.prototype), 'constructor', this).apply(this, arguments);
    this.state = { data: {} };
    this.onSubmit = this.onSubmit.bind(this);
  }

  _createClass(FormDemo2, [{
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('onsubmit', this.refs);
      var datas = this.refs.form.collectForm();
      console.log(datas);
      this.setState({ data: datas });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          Form,
          { ref: 'form' },
          _react2['default'].createElement(
            'div',
            null,
            'demo'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label', ref: 'label' },
              'Email:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_input.EmInput, { validation: [required('email required'), maxlength(10, 'maxlength 10')], ref: 'email', name: 'email', placeholder: 'email' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              'Password:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_input.EmInput, { validation: { 'email': [required('email or phone is required')], 'validate phone number': [required('email or phone is required'), range(1, 10, 'between 1 and 10')] }, ref: 'password', name: 'password', type: 'password', placeholder: 'password' }),
              _react2['default'].createElement(_input.EmInput, { validation: [required('email or phone is required'), { 'email': [email('email is required')], 'phone': [range(1, 10, 'between 1 and 10')] }], ref: 'password', name: 'password', type: 'password', placeholder: 'password' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              'gender:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_radio.Radio, { name: 'gender2', value: 'male' }),
              ' 男',
              _react2['default'].createElement(_radio.Radio, { name: 'gender2', checked: true, value: 'female' }),
              ' 女'
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              '工作时:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周一' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周一'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周二' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周二'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周三' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周三'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周四' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周四'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', defaultValue: true, value: '周五' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周五'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', value: '周六' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周六'
              ),
              _react2['default'].createElement(_toggleCheckbox.Checkbox, { name: 'workday', value: '周日' }),
              _react2['default'].createElement(
                'span',
                { style: { marginRight: 10 } },
                '周日'
              )
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(
              'div',
              { className: 'form-label' },
              '开关:'
            ),
            _react2['default'].createElement(
              'div',
              { className: 'form-control' },
              _react2['default'].createElement(_toggleSwitcher.Switcher, { name: 'switch', defaultValue: true })
            )
          ),
          _react2['default'].createElement(_spacer.EmSpacer, null),
          _react2['default'].createElement(
            'div',
            { className: 'form-row' },
            _react2['default'].createElement(_button.MainButton, { type: 'submit', onClick: this.onSubmit, label: 'submit' })
          )
        ),
        _react2['default'].createElement(
          'div',
          null,
          JSON.stringify(this.state.data)
        )
      );
    }
  }, {
    key: 'data',
    value: function data() {}
  }]);

  return FormDemo2;
})(_react2['default'].Component);

exports.EmInput = _input.EmInput;
exports.Radio = _radio.Radio;
exports.RadioGroup = _radio.RadioGroup;
exports.Form = Form;
exports.FormDemo = FormDemo;
exports.FormDemo2 = FormDemo2;
exports.Validation = _utils2.validation;