import React from 'react';

//ref actually only works on component
//below is to make it works on function

export function Reffunction(props) {
    // textInput must be declared here so the ref can refer to it
    let textInput = React.createRef();

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput} />

            <input
                type="button"
                value="Focus the text input"
                onClick={handleClick}
            />
        </div>
    );
}

export default Reffunction;
