import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Testing from './Testing';
import AppRouterLoadable from './AppRouterLoadable';
import registerServiceWorker from './registerServiceWorker';
import Withcontext from './Withcontext';
import Nocontext from './Nocontext';
import Page from './Altcontext';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import Themecontext from './Themecontext';

// ReactDOM.render(<App />, document.getElementById('root1'));
// ReactDOM.render(<Testing name="Stacy" />, document.getElementById('root2'));
// ReactDOM.render(<AppRouterLoadable />, document.getElementById('root3'));

//Context
// https://reactjs.org/docs/context.html
// ReactDOM.render(<Nocontext />, document.getElementById('no-context'));
// ReactDOM.render(<Withcontext />, document.getElementById('with-context'));
// ReactDOM.render(<Page author="hola" />, document.getElementById('alt-context'));
ReactDOM.render(<Themecontext />, document.getElementById('theme-context')); //this need more experiment



registerServiceWorker();
