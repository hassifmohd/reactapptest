import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';





class BookDetail extends React.Component {

    constructor(props) {
        super(props);

    }

    pleaseClickThis(e) {
        e.preventDefault();
        // this.props.changeMessage(this.props.message);
        console.log('YOU CLICK IT!');
        this.props.thisWillBeAFunctionEmbedded('HELLO MARS');
      }

    render() {

        console.log(this.props);
        //console.log(this.props.asinglebook); //

        return (

            <div>
                <h1>Title: {this.props.bookdetail.title}</h1>
                <p>No of page: {this.props.bookdetail.page}</p>
                {/* <p>whatyougiveyougetback: {this.props.whatyougiveyougetback}</p> */}
                <button onClick={this.pleaseClickThis.bind(this)} >PLEASE CLICK THIS OK</button>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        bookdetail: state.booksaaa[3],
        whatyougiveyougetback: state.thisiswhatyouget,
        asinglebooko: state.asinglebooka
        //whatyougiveyougetback: 'HUPLA',
    };
}

let updateTheBookPlease = function (theisbookdatagiventome = 'HELLO WORLD') {

    let shutreturnsumesortofbookhere = theisbookdatagiventome;

    //return an action
    return {
        type: 'change_book_please',
        // whatisthislol: [{eat: 'book'}]
        whatisthislol: shutreturnsumesortofbookhere
    }
}

// function changeMessage(message) { 
 
//     let newMessage;
//     if(message=='First Message 1') {
//       newMessage = 'Second Message 2';
//     } else {
//       newMessage = 'First Message 1';
//     }
    
//     //return an action
//     return {
//       type: 'qweqwewq',
//       pootpoot: newMessage
//     }
//   }

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ thisWillBeAFunctionEmbedded: updateTheBookPlease }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
