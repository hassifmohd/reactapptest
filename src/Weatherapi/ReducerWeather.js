import { FETCH_WEATHER } from './ActionGetWeatherForecast';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
        //state.concat([action.payload.data]); //NEVER DO THIS, THIS IS STATE MUTATION. Use concat(...) instead
        return [action.payload.data, ...state]; //equivalent to state.concat([action.payload.data]);
        break;
    }

    return state;
}
