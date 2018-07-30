import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));

        //produce error during Event handlers, disable this to test "I crashed!" error
        // try {
        //     throw new Error('You crush!');
        // } catch (error) {
        //     this.setState({ error });
        // }
    }

    render() {

        //If crash during render, react will unmount then go to <ErrorBoundary/> that originally being encapsulate
        if (this.state.counter === 6) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }

        //while, if error during onclick (Event handlers) will not go to <ErrorBoundary/>. So this is the custom handler
        if (this.state.error) {
            return <h1>Caught an error.</h1>;
        }

        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

export default BuggyCounter;
