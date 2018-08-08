import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// const { Provider, connect } = ReactRedux;

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderList() {

        // let test = [
        //     {title: 'Book 1', id: 1},
        //     {title: 'Book 2', id: 2},
        // ];

        let test = this.props.books;

        return test.map( (book) => {
            return <li key={book.id} >{book.title}</li>
        });
    }
    
    render() {

        return ( <ul>
            <li>AAA</li>
            <li>BBB</li>
            {this.renderList()}
        </ul> );
    }
}

function mapStateToProps(state) {

    // let books = [
    //         {title: 'Book 1', id: 1},
    //         {title: 'Book 2', id: 2},
    //         {title: 'Book 3', id: 2},
    //     ];

    return {
        // books: state.books
        books: state.books
    };
}

//map our the state's message to this property on the components
// let mapStateToProps = function(state) {
//     return { message: state.message };
// }

//give these components access to the change message creator
// let mapDispatchToProps = function(dispatch) {
//   return bindActionCreators({changeMessage}, dispatch)
// }

//https://codepen.io/dmiller5383/pen/awQaZg?editors=1010

export default connect(mapStateToProps)(BookList);
