import React from 'react';
const ThemeContext = React.createContext('light');

class Button extends React.Component {
    componentDidMount() {
        // ThemeContext value is this.props.theme
    }

    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
    }

    render() {
        const { theme, children } = this.props;
        return (
            <button className={theme || 'light'}>
                {children}
            </button>
        );
    }
}

export default justanotertest12222 => (

    <div>HUJAN</div>

    // <ThemeContext.Consumer>
    //     {theme => <Button {...props} theme={theme} />}
    // </ThemeContext.Consumer>
);
