import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {

    constructor(props) {
        super(props);

    }

    renderTheLiPlease() {

        let mybook = this.props.library;

        return mybook.map( (abook) => {
            return <li key={abook.id} >{abook.title}</li>;
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

export default connect(mapStateToProps)(BookList);
