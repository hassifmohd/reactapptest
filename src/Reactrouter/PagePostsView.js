import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from './ActionFetchPosts';

class PostView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        // alert('post_id = ' + this.props.match.params.post_id);
        this.props.fetchPost(this.props.match.params.post_id);
    }

    render() {

        // console.log(this.props.match);
        // console.log(this.props.match.params);

        if(!this.props.post) {
            return <div>Loading Page ID : {this.props.match.params.post_id}</div>
        }

        return (
            <div>
                <div>Page ID: {this.props.match.params.post_id}</div>

                <table>
                    <tr>
                        <td>title</td>
                        <td>{this.props.post.title}</td>
                    </tr>
                    <tr>
                        <td>categories</td>
                        <td>{this.props.post.categories}</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>{this.props.post.content}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

export default connect(mapStateToProps, { fetchPost })(PostView);
