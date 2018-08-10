import axios from 'axios';

const API_KEY_WEATHER_FORECAST = 'ab02dbeea8850bd53292e9e5565865f4';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER_FORECAST}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    //get the weather from the API
    const url = `${ROOT_URL}&q=${city},my`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
