import React from 'react';
import WeatherIcon from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from './../../../constants/weathers';

const icons = {
    cloud: CLOUD,
    cloudy: CLOUDY,
    sun: SUN,
    rain: RAIN,
    snow: SNOW,
    windy: WINDY
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if (icon)
        return <WeatherIcon name={icon}></WeatherIcon>;
    else
        return <WeatherIcon name={SUN}></WeatherIcon>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;