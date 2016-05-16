import {Dispatcher} from 'flux';

class PopupDispatcher extends Dispatcher{
  dispatch(action = {}) {
    super.dispatch(action);
  }
}
var dispatcher = new PopupDispatcher();
export {dispatcher};
