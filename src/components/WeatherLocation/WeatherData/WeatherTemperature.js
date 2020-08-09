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

    const sizeIcon = "4x"

    if (icon)
        return <WeatherIcon className="wIcon" name={icon} size={sizeIcon}></WeatherIcon>;
    else
        return <WeatherIcon className="wIcon" name={SUN} size={sizeIcon}></WeatherIcon>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature} `}</span>
        <span className="temperatureType">{`ºC`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;