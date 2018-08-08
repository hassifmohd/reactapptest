import { combineReducers, createStore } from 'redux';
import Bookdatabase from './Bookdatabase';

function youSelectABook (state = null, action) {

    console.log('BB messageReducer.action.type=' + action.type);
    console.log(action);

    switch (action.type) {
        
        case 'i_select_a_book':
            // console.log(action.theBookDetail);
            //alert(action.theBookDetail.title);
            return action.theBookDetail;
            break;
        
        case 'change_book_please':
            return action.whatisthislol;
            break;

        default:
            return state;
    }
}

//this actually called GlobalActionReducer
//but if messageReducer & youSelectABook return different. we cannot combine them all
// let messageReducer = function (state = null, action) {

//     console.log('AA messageReducer.action.type=' + action.type);

//     switch (action.type) {

//         default:
//             return state;
//     }
// }

// let youClickASingleBook = function (state = null, action) {

//     switch (action.type) {
//         case 'change_book_a':
//             return action.whatisthislol;

//         default:
//             return state;
//     }
// }

const mysql = combineReducers({
    booksaaa: Bookdatabase,
    aspecificbook: Bookdatabase,
    // thisiswhatyouget: () => {return 'HAHA';}
    thisiswhatyouget: youSelectABook,
    // sendsomehelp: messageReducer
    asinglebooka: youSelectABook,
});

let data = createStore(mysql);

export default data;
