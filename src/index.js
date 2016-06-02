import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import {PopLayer} from './components/tags/popup';

import {Demo} from './demo';

//import {DialogLayer, DialogPopLayer} from './components/tags/dialog';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<PopLayer />, document.getElementById('app-pop'));
//ReactDOM.render(<DialogLayer />, document.getElementById('app-dialog'));
//ReactDOM.render(<DialogPopLayer />, document.getElementById('app-dialog-pop'));
ReactDOM.render(<Demo/>, document.getElementById('demo'));
