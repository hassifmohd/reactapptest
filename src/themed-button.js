import { ThemeContext } from './theme-context';
import React from 'react';

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {magictheme => (
                <button
                    {...props}
                    style={{
                        backgroundColor: magictheme.background,
                        color: magictheme.foreground
                    }}
                >{props.buttonname ? props.buttonname : 'BUTTON'}</button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemedButton;
