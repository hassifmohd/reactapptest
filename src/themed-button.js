import { ThemeContext } from './theme-context';
import React from 'react';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <button
                    {...props}
                    style={{
                        backgroundColor: theme.background,
                        color: theme.foreground
                    }}
                >BUTTON</button>

            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;
