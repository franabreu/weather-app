import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'
import transformWeather from '../../services/transformWeather';
import getURLWeatherByCity from '../../services/getURLWeatherByCity';

class WeatherLocation extends Component {
    
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const api_weather = getURLWeatherByCity(this.state.city);
        fetch(api_weather).then(response => {
            return response.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.protoType = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;