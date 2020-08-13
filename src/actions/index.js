
import transformForecast from '../services/transformForecast';
import getURLForecastByCity from '../services/getURLForecastByCity';
import getURLWeatherByCity from '../services/getURLWeatherByCity';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
const setCity = payload => ({ type: SET_CITY, payload });

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const api_forecast = getURLForecastByCity(payload);

        // Trigger flag in the store pointing out we are retrieving data
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if (date && (now - date ) < 5 * 60 * 1000) {
            return;
        }

        return fetch(api_forecast).then(
            response => (response.json())
        ).then(data => {
            const forecastData = transformForecast(data);

            // modify the state with the fetch result
            dispatch(setForecastData({ city: payload, forecastData }));
        });
    }
};

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });

export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const SET_WEATHER = 'SET_WEATHER';
export const setWeather = payload => {

    const api_weather = getURLWeatherByCity(payload);

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            fetch(api_weather).then(
                response => response.json()
            ).then(data => {
                const weather = transformWeather(data);
                dispatch(setWeatherCity({ city, weather }))
            });
        })
    }
}