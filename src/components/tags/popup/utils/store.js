import {ReduceStore} from 'flux/utils';
import {dispatcher} from './dispatcher.js';

class PopupStore extends ReduceStore{
  getInitialState(){
    return {};
  }
  reduce(state,action){
    var newstate = Object.assign({},state);
    console.log('reduce:',action);
    switch(action.type){
      case 'add':
        newstate = Object.assign({},{[action.popid]:action.popup});
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
    console.log('newstate',newstate);
    return newstate;
  }
}
var store = new PopupStore(dispatcher);
export {store};


