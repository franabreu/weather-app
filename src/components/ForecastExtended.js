import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import getURLForecastByCity from '../services/getURLForecastByCity';
import './styles.css'

/* const days = [
    'Lunes',
    'Martes',
    'Miércoles'
]

const data = {
    temperature: 222,
    humidity: 99,
    weatherState: 'normal',
    wind: 99
} */

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentDidUpdate(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const api_forecast = getURLForecastByCity(city);
        fetch(api_forecast).then(response => {
            return response.json();
        }).then(data => {
            const forecastData = transformForecast(data);
            this.setState({ forecastData })
        });
    }

    renderForcastItemsDays(forecastData) {
        return forecastData.map((forecast, index) =>
            <ForecastItem
                key={index}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>);
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className='ext-forecast-title'>Pronóstico meteorológico de {city}</h2>
                {forecastData ?
                    this.renderForcastItemsDays(forecastData) :
                    <CircularProgress size={50} />
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForecastExtended;