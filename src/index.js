import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Testing from './Testing.js';
import AppRouterLoadable from './AppRouterLoadable.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root1'));
// ReactDOM.render(<Testing name="Stacy" />, document.getElementById('root2'));
ReactDOM.render(<AppRouterLoadable />, document.getElementById('root3'));
registerServiceWorker();
