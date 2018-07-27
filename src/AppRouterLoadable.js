import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

//init the loadable & routing 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';
const OtherComponent = Loadable({
    loader: () => import('./OtherComponent'),
    loading: () => <div>Loading...</div>,
});
const Testing = Loadable({
    loader: () => import('./Testing'),
    loading: () => <div>Loading...</div>,
});

class AppRouterLoadable extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/testing">Testing</Link></li>
                        <li><Link to="/other-component">OtherComponent</Link></li>
                    </ul>
                    <Route exact path="/testing" component={Testing} />
                    <Route exact path="/other-component" component={OtherComponent} />
                </div>
            </Router>
        );
    };
}

export default AppRouterLoadable;