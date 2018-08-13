import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './ActionFetchPosts';
import { bindActionCreators } from 'redux';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.posts();
    }

    render() {

        console.log("Execute PostIndex.render()");

        return (
            <div>
                <h2>Posts index</h2>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ posts: fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostIndex);
