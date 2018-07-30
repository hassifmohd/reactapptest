import {ThemeContext, themefromoutside, students, subjects} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';

function Toolbar(props) {
    return (
        <ThemedButton buttonname="CLICK ME" onClick={props.changeThemosupremo} />
    );
}

class Themecontextual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thermos: themefromoutside.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                thermos:
                    state.thermos === themefromoutside.dark ? themefromoutside.light : themefromoutside.dark,
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <div>
                    <ThemeContext.Provider value={this.state.thermos}>
                        <Toolbar changeThemosupremo={this.toggleTheme} />
                        <Toolbar changeThemosupremo={this.toggleTheme} />
                    </ThemeContext.Provider>
                </div>
                <div>
                    <ThemeContext.Provider value={this.state.thermos}>
                        <Toolbar changeThemosupremo={this.toggleTheme} />
                    </ThemeContext.Provider>
                </div>
                <div>
                    <Toolbar changeThemosupremo={this.toggleTheme} />
                </div>
                <div>
                    <ThemedButton buttonname="ANOTHER BUTTON 1" />
                </div>
                <div>
                    <ThemeContext.Provider value={this.state.thermos}>
                        {/* can also be done without using Toolbar */}
                        <ThemedButton buttonname="ANOTHER BUTTON 2" onClick={this.toggleTheme} />
                    </ThemeContext.Provider>
                </div>
            </div>
        );
    }
}

export default Themecontextual;
