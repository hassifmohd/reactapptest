import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {

    constructor(props) {
        super(props);

    }

    renderTheLiPlease() {

        let mybook = this.props.library;

        return mybook.map( (abook) => {
            return <li onClick={() => this.props.iSelectABook(abook)} key={abook.id} >{abook.title}</li>;
        });
    }

    render() {

        return ( 
        <ul>
            <li>Sponsored books</li>
            {this.renderTheLiPlease()}
        </ul>
        );
    }
}

function mapStateToProps(state) {

    return {
        library: state.booksaaa
    };
}

function iSelectABook (theBookDetail) {

    console.log('BOOK IS SELECTED : ' + theBookDetail.title);
    
    return {
        type: 'i_select_a_book',
        theBookDetail: theBookDetail
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ iSelectABook: iSelectABook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
