import {Dispatcher} from 'flux';

class RadioDispatcher extends Dispatcher{
  dispatch(action = {}) {
    super.dispatch(action);
  }
}
var dispatcher = new RadioDispatcher();
export {dispatcher};

