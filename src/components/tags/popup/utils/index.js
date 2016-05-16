import {dispatcher} from './dispatcher.js';
import {store} from './store.js';

var id = 0;
function getId(){
  return ++id;
}


export {getId,dispatcher,store};

