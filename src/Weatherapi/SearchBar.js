import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchbar_searchterm: ''
        }

        this.handlerInputOnChange = this.handlerInputOnChange.bind(this);
        this.handlerFormOnSubmit = this.handlerFormOnSubmit.bind(this);
    }

    handlerInputOnChange(event) {

        console.log('handlerInputOnChange=' + event.target.value);

        this.setState({
            searchbar_searchterm: event.target.value
        });
    }

    handlerFormOnSubmit(event) {

        console.log('handlerFormOnSubmit=' + this.state.searchbar_searchterm);

        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handlerFormOnSubmit}>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="enter a city"
                    value={this.state.searchbar_searchterm}
                    onChange={this.handlerInputOnChange}
                />
                <button 
                    type="submit"
                    className="btn btn-primary"
                >SUBMIT</button>
            </form>
        );
    }
}

