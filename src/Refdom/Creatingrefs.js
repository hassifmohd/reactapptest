import React from 'react';

class Creatingrefs extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        alert("Focusing into : " + this.textInput.current.id);
        this.textInput.current.value = "HELLO HOOMAN";
        this.textInput.current.focus();
    }
    
    //Adding a Ref to a Class Component
    //https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-class-component
    componentDidMount() {
        this.textInput.current.focus();
        //this.textInput.current.focusTextInput(); //<-- use this if using another component that render Creatingrefs
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div>
                <input id="helloworld"
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

export default Creatingrefs;
