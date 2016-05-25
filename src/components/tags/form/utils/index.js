import {dispatcher} from './dispatcher.js';
import {store} from './store.js';

var id = 0;
function getId(){
  return ++id;
}

import {validation }  from './validate.js';

export {getId,dispatcher,store, validation };

