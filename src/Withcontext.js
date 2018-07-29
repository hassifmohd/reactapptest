import React, { Component } from 'react';

export const ThemeContext = React.createContext('light');

class Withcontext extends Component {
    render() {
        return (
            //If you remove ThemeContext.Provider, system will take light as default value
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => <button {...props} theme={theme}>theme={theme}</button>}
        </ThemeContext.Consumer>
    );
}

export default Withcontext;
