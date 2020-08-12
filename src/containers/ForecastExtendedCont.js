import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended'

class ForecastExtendedCont extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city}></ForecastExtended>
        );
    }
}

ForecastExtendedCont.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedCont);