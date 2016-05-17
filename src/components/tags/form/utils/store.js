import {ReduceStore} from 'flux/utils';
import {dispatcher} from './dispatcher.js';

class RadioStore extends ReduceStore{
  getInitialState(){
    return {};
  }
  reduce(state,action){
    var newstate = Object.assign({},state);
    var name = action.name;
    var value = action.value;
    console.log(name,value);
    switch(action.type){
      case 'own':
        newstate = Object.assign(newstate,{[name]:value});
        break;
    }
    return newstate;
  }
}
var store = new RadioStore(dispatcher);
export {store};
