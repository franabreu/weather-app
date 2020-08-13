import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { getCity, getWeatherCities } from '../reducers';
import * as actions from '../actions';

class LocationListCont extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city} = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
        );
    }
}

LocationListCont.propTypes = {
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string,
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ 
    city: getCity(state),
    citiesWeather: getWeatherCities(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/* const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
}); */

export default connect(mapStateToProps, mapDispatchToProps)(LocationListCont);