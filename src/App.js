import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';

//Study Code-Splitting
//https://reactjs.org/docs/code-splitting.html
//This { ... } only import specific functions, not as a library or class?
import { add } from './math.js';
import { uppercase } from './uppercase.js';
import { lowercase } from './uppercase.js';

import Stingmanipulator from './Stingmanipulator.js';
import Testing from './Testing.js';

//React Loadable
//https://reactjs.org/docs/code-splitting.html#react-loadable
//this is extremly important feature, please read https://www.npmjs.com/package/react-loadable
import OtherComponent from './OtherComponent';
const MyComponent = () => (<OtherComponent/>);
const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});
const AnotherComponent = () => (<LoadableOtherComponent/>);

//Loadable is not complete. You need routing to call the "please load this oh Loadable"
//also important, please read https://reacttraining.com/react-router/web/example/basic
//for this example we will use AppRouterLoadable.js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <p>Import math.js {add(16, 26)}</p>
          <p>Import uppercase.js {uppercase('Hello world')}</p>
          <p>Import uppercase.js {lowercase('Hello world')}</p>
          <p>Import Stingmanipulator.js {Stingmanipulator.lowercase}</p>
          <div>Import Testing.js <Testing name="Adam" /></div>
          <div>Load OtherComponent = <OtherComponent /></div>
          <div>Load MyComponent = <MyComponent /></div>
          <div>Load LoadableOtherComponent = <AnotherComponent /></div>
          <div>Load LoadableOtherComponent = <LoadableOtherComponent /></div>
        </div>
      </div>
    );
  }
}

export default App;
