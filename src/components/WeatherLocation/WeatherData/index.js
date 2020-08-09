import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { SUN } from './../../../constants/weathers';
import './styles.css'

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={38} 
            weatherState={SUN}>
        </WeatherTemperature>

        <WeatherExtraInfo humidity={95} wind={'14'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;