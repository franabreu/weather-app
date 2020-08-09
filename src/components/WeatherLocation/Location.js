import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Location = ({ city }) => {

    // Destructuring
        // We can do it in a const or directly in the component params

    return (
        <div className="locationCont">
            <h1>
                {city}
            </h1>
        </div>
    );
};

Location.protoTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;