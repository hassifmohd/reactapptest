import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return ( 
        <div>
            <h1>Title: {this.props.bookdetail.title}</h1>
            <p>No of page: {this.props.bookdetail.page}</p>
        </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        bookdetail: state.aspecificbook[3]
    };
}

export default connect(mapStateToProps)(BookDetail);
