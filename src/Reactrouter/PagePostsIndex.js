import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './ActionFetchPosts';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log('renderPosts', this.props);

        if(!this.props.posts) {
            return <li>ONGOING</li>
        }

        return this.props.posts.map((post) => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={"view/" + post.id} >
                        <span className='pull-xs-right'>{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        });
    }

    render() {

        console.log("Execute PostIndex.render()");

        return (
            <div>
                <h2>Posts index</h2>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {

    console.log('mapStateToProps', state.posts);

    return {
        posts: state.posts.posts
    }
}

// why need this if you can ust simply bind it directly
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ posts: fetchPosts }, dispatch);
// }

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);
