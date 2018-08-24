import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './CombineActionsCreator'
import _ from 'lodash';

class PostsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {

            //ignore empty posts
            if(post.title == null) {
                return null;
            }

            //render as usual
            return (
                <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.categories}</td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <h1>Posts Index</h1>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderPosts()}</tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
