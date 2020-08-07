import React from 'react';
import WeatherIcon from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if (icon)
        return <WeatherIcon name={icon}></WeatherIcon>;
    else
        return <WeatherIcon name={"day-sunny"}></WeatherIcon>;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} ºC`}</span>
    </div>
);

export default WeatherTemperature;