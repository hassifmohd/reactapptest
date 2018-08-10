import React from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from './ActionGetWeatherForecast';


class SearchBar extends React.Component {
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

        // this will cause state to update eveytime, thus refreshing the component everytime
        this.setState({
            searchbar_searchterm: event.target.value
        });
    }

    handlerFormOnSubmit(event) {

        console.log('handlerFormOnSubmit=' + this.state.searchbar_searchterm);

        event.preventDefault();

        //get the weather
        this.props.fetchWeather(this.state.searchbar_searchterm);
    }

    render() {

        // after changes more then .5 seconds, then will execute
        // const callHandlerInputOnChange = _.debounce(this.handlerInputOnChange, 500);

        return (
            <form className="form-inline" onSubmit={this.handlerFormOnSubmit}>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="enter a city"
                    onChange={this.handlerInputOnChange}
                    value={this.state.searchbar_searchterm}
                />
                <button 
                    type="submit"
                    className="btn btn-primary"
                >SUBMIT</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
