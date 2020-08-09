import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import { SUN, CLOUDY } from './../../constants/weathers';

const data = {
    temperature: 12,
    weatherState: CLOUDY,
    humidity: 99,
    wind: '73',
}

const data2 = {
    temperature: 38,
    weatherState: SUN,
    humidity: 10,
    wind: '21',
}

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Cartaya",
            data: data
        };
    }

    handleUpdateClick = () => {
        this.setState( {city: 'Sevilla', data: data2});
        console.log("Updated WeatherLocation component!");
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

WeatherData.protoType = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherLocation;