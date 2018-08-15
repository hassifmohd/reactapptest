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
const PostsViewLoadable = Loadable({
    loader: () => import('./PagePostsView'),
    loading: () => <div>Loading...</div>,
});

const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
);

const Child = function(_ref) {
    var match = _ref.match;

    return <div>
        <h3>ID: {match.params.post_id}</h3>
    </div>
};

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
                <Route path="/view/:post_id" component={PostsViewLoadable} />
            </div>
        </Router>
    );
}
