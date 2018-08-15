import React from 'react';

class PostView extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        console.log(this.props.match);
        console.log(this.props.match.params);

        return (
            <div>Page ID: {this.props.match.params.post_id}</div>
        );
    }
}

export default PostView;
