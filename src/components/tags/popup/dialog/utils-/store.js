import React from 'react';
import {ReduceStore} from 'flux/utils';
import {dispatcher} from './dispatcher.js';

class DialogStore extends ReduceStore{
  getInitialState(){
    return {};
  }
  reduce(state,action){
    var newstate = Object.assign({},state);
    var layer = action.layer;
    switch(action.type){
      case 'poptop':
        var keys = Object.keys(newstate);
        var dialog = action.dialog;
        dialog = React.cloneElement(dialog,{layer:keys.length+1});
        newstate[keys.length+1]=dialog;
        break;
      case 'popat':
        var dialog = action.dialog;
        console.log('popat',layer,dialog);
        // 查找目标layer上dialog，并清除
        // 将子layer一并清除
        dialog = React.CloneElement(dialog,{layer:layer});
        newstate[layer]=dialog;
        break;
      case 'destory':
        console.log('destroy',layer);
        delete newstate[layer];
        break;
      case 'remove':
        delete newstate[action.popid];
        break;
      case 'removeAll':
        var keys = Object.keys(state);
        keys.forEach(key=>{
          if(state[key].props.onCancel){
            state[key].props.onCancel();
          }
        });
        newstate={};
        break;
    }
    var keys = Object.keys(newstate);
    keys.forEach((key,index)=>{
      var newEle = React.cloneElement(newstate[key],{top:index==keys.length-1});
      newstate[key]=newEle;
    });
    return newstate;
  }
}
var store = new DialogStore(dispatcher);
export {store};



