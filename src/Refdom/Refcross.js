//Refs cross between component and function
import React from 'react';

function CustomTextInputcross(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Refcross extends React.Component {

    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // Focus the text input using the raw DOM API
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
    }

    render() {
        return (
            <CustomTextInputcross
                inputRef={el => this.textInput = el}
            />
        );
    }
}

export default Refcross;
