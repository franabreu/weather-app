import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
import ForecastItem from './ForecastItem';
import './styles.css'

const renderForcastItemsDays = (forecastData) => {
    return forecastData.map((forecast, index) =>
        <ForecastItem
            key={index}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>);
};

const ForecastExtended = ({ city, forecastData }) => (

    <div>
        <h2 className='ext-forecast-title'>Pronóstico meteorológico de {city}</h2>
        {forecastData ?
            renderForcastItemsDays(forecastData) :
            <CircularProgress size={50} />
        }
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array,
}

export default ForecastExtended;