import React, { Component } from 'react';

//without context
class Nocontext extends Component {
    render() {
        return <Toolbar theme="dark" />
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    return <button theme={props.theme}>theme={props.theme}</button>;
}

export default Nocontext;
