import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {PopLayer} from './components/tags/popup';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<PopLayer />, document.getElementById('app-pop'));
