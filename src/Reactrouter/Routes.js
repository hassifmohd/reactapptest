import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable'

const PostsIndexLoadable = Loadable({
    loader: () => import('./PagePostsIndex'),
    loading: () => <div>Loading...</div>,
});
const PostsAddLoadable = Loadable({
    loader: () => import('./PagePostsAdd'),
    loading: () => <div>Loading...</div>,
});

const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
);

export default function () {
    return (
        <Router>
            <div>
                <h1>Blog post</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/index">Post Index</Link></li>
                    <li><Link to="/add">Post add</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route exact path="/index" component={PostsIndexLoadable} />
                <Route exact path="/add" component={PostsAddLoadable} />
            </div>
        </Router>
    );
}
