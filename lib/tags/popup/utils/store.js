'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _fluxUtils = require('flux/utils');

var _dispatcherJs = require('./dispatcher.js');

/**
 * layerManager.
 * 弹出：
 * dialog弹层：可替换当前层的popup,或者新增一层
 * popup弹层：可替换当前层的popup,或者在dialog上新增一层
 * tiplist:  次顶层
 * menu弹层：最顶层
 *
 * 关闭：
 * dialog: 关闭某层及之后的所有dialog及popup
 *        最外层dialog及之后的popup/menu等
 * popup: dialog之后的popup: 最顶层的popup
 *
 * menus: 任何风吹草动都消失
 *
 */

var PopupStore = (function (_ReduceStore) {
  _inherits(PopupStore, _ReduceStore);

  function PopupStore() {
    _classCallCheck(this, PopupStore);

    _get(Object.getPrototypeOf(PopupStore.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PopupStore, [{
    key: 'getInitialState',
    value: function getInitialState() {
      //[
      //  {layer:0,content:dialog},
      //  {layer:1,content:popup},
      //  {layer:2,content:dialog2},
      //  {layer:3,content:timepocker},
      //]
      return { layers: [] };
    }
  }, {
    key: 'reduce',
    value: function reduce(state, action) {
      console.log('reduce', action);
      var layers = state.layers.slice(0); //Object.assign({},state);
      var layerid = action.layer;
      var newlayer;
      switch (action.type) {
        // 销毁dialog
        case 'destroy':
        case 'dialog-pop':
          var index = -1;
          for (var i = layers.length - 1; i >= 0; i--) {
            if (layers[i].type == 'dialog') {
              index = i;
              break;
            }
          }
          if (index != -1) {
            layers = layers.slice(0, index);
          }
          break;

        //在固定层弹dialog
        //replace popup
        case 'dialog-replace':
          var dialog = action.content;
          console.log('popat', layer, dialog);
          // 查找目标layer上dialog，并清除
          // 将子layer一并清除
          var last = layers.pop();
          while (last && last.type != 'dialog') {
            last = layers.pop();
          }
          last && layers.push(last);

          dialog = React.cloneElement(dialog, { layer: layer });
          layers = layers.slice(0, layer);
          newlayer = { layer: layers.length, content: dialog, type: 'dialog' };
          layers.push(newlayer);
          break;

        // 在顶层添加dialog
        case 'poptop':
        case 'dialog-push':
          //var keys = Object.keys(layers);
          var dialog = action.content;
          dialog = React.cloneElement(dialog, { layer: layers.length });
          newlayer = { layer: layers.length, content: dialog, type: 'dialog' };
          layers.push(newlayer);
          break;

        // 弹popup
        case 'pop-push':
        case 'add':
          newlayer = { layer: state.length, content: action.content, type: 'popup' };
          layers.push(newlayer);
          //layers = Object.assign({},{[action.popid]:action.popup});
          break;

        case 'pop-replace':
          var last = layers.pop();
          while (last && last.type == 'popup') {
            last = layers.pop();
          }
          last && layers.push(last);
          newlayer = { layer: state.length, content: action.content, type: 'popup' };
          layers.push(newlayer);
          break;

        // 移除popup
        case 'pop-pop':
          for (var i = layers.length - 1; i >= 0; i--) {
            if (layers[i].type == 'popup') {
              layers.pop();
            } else {
              break;
            }
          }
          break;

        // 移除所有popup&dialog
        case 'removeAll':
          layers.forEach(function (layer, index) {
            if (layer.content.props.onCancel) {
              layer.content.props.onCancel();
            }
          });
          layers = [];
          break;
      }
      var first = true;
      for (var i = layers.length - 1; i >= 0; i--) {
        var layer = layers[i];
        if (layer.type == 'dialog') {
          layer.content = React.cloneElement(layer.content, { top: first });
          first = false;
        }
      }
      console.log('layers', layers);
      return { layers: layers };
    }
  }]);

  return PopupStore;
})(_fluxUtils.ReduceStore);

var store = new PopupStore(_dispatcherJs.dispatcher);
exports.store = store;