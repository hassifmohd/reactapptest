import React from 'react';
import { connect } from 'react-redux';
import ChartistGraph from 'react-chartist';

class WeatherList extends React.Component {

    //
    renderWeather(cityData) {

        const name = cityData.city.name;

        let temperature = {
            series: [cityData.list.map(weather => weather.main.temp)]
        };

        let humidity = {
            series: [cityData.list.map(weather => weather.main.humidity)]
        };

        let pressure = {
            series: [cityData.list.map(weather => weather.main.pressure)]
        };

        const pStyle = {
            width: '100%',
            height: '150px',
        };

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <div>Temperature<br /><ChartistGraph style={pStyle} data={temperature} type='Line' /></div>
                    <div>Humidity<br /><ChartistGraph style={pStyle} data={humidity} type='Line' /></div>
                    <div>Pressure<br /><ChartistGraph style={pStyle} data={pressure} type='Line' /></div>
                </td>
            </tr>
        );
    }

    render() {

        const pStyle = {
            width: '100%',
        };

        return (
            <table style={pStyle} className='table-bordered'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
