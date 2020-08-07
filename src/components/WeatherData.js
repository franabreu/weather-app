import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={''}>
        </WeatherTemperature>

        <WeatherExtraInfo humidity={95} wind={14}></WeatherExtraInfo>
    </div>
);

export default WeatherData;