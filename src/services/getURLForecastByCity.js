import { url_base_forecast, api_key } from '../constants/api_url';

const getURLForecastByCity = city => {
    return `${url_base_forecast}?q=${city}&appid=${api_key}`;
}

export default getURLForecastByCity;