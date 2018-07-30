import React, { Component } from 'react';

export const ThemeContext = React.createContext('light');

class Withcontext extends Component {
    render() {
        return (
            <div>
                {/* if you define provider, you must insert value. else theme will be blank */}
                <ThemeContext.Provider value="dark">
                    <Toolbar />
                </ThemeContext.Provider>

                {/* to use default value is not define the provider */}
                <Toolbar />
            </div>
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
        <div>
            <div>
                <ThemeContext.Consumer>
                    {theme => <button {...props} theme={theme}>theme={theme}</button>}
                </ThemeContext.Consumer>
            </div>
        </div>
    );
}

export default Withcontext;
