//Import any modules from libraries
const { Provider, connect } = ReactRedux;
const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;
const CHANGE_MESSAGE = 'change_message';

//This is the Action Creator
let changeMessage = function(message) { 
 
  let newMessage;
  if(message=='First Message 1') {
    newMessage = 'Second Message 2';
  } else {
    newMessage = 'First Message 1';
  }
  
  //return an action
  return {
    type: CHANGE_MESSAGE,
    pootpoot: newMessage
  }
}

//Our reducer
let messageReducer = function(state={}, action) {

  switch(action.type) {
    case CHANGE_MESSAGE:
   
      return action.pootpoot;
    default:
      return state;
  }
}

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers ({

  message: messageReducer
});

//create the store
let store = createStore(rootReducer);

//Component one is a button
class ReduxButton extends React.Component {
  
  onClick(e) {
    
    e.preventDefault();
    this.props.changeMessage(this.props.message);
  }
  render() {
    return(
      <div>  
        <button onClick={this.onClick.bind(this)}>Press Button</button>
     </div>
    );
  }
}

//Second component is a text field
class ReduxTextField extends React.Component {
  
  render() {

    if(typeof this.props.message == "object") {
      return (<div>First Message</div>);
    } else {
      
      return(<div>{this.props.message}</div>);
    }
  }
}

//map our the state's message to this property on the components
let mapStateToProps = function(state) {
    return { message: state.message };
}

//give these components access to the change message creator
let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({changeMessage}, dispatch)
}

//Make the two components Redux Containers
const ReduxButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxButton);
const ReduxTextFieldContainer = connect(mapStateToProps, null)(ReduxTextField);

//Create teh app component which contains the button and text field
class App extends React.Component {
  render() {
    return (
      <div>
        <ReduxTextFieldContainer />
        <ReduxButtonContainer />
      </div>
    )
     
  }
}

//Finally render to DOM!
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('codepen1'));
