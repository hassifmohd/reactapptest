import { ThemeContext, themefromoutside } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import React from 'react';

class Themecontextualv2 extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themefromoutside.dark
                        ? themefromoutside.light
                        : themefromoutside.dark,
            }));
        };

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            theme: themefromoutside.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        // The entire state is passed to the provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default Themecontextualv2;
