import {Dispatcher} from 'flux';

class DialogDispatcher extends Dispatcher{
  dispatch(action = {}) {
    super.dispatch(action);
  }
}
var dispatcher = new DialogDispatcher();
export {dispatcher};

