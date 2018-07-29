import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme} />
    );
}

class Themecontext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <div>
                    <ThemedButton />
                </div>
            </div>
        );
    }
}

export default Themecontext;
