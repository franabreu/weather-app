import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => {

    // Destructuring
        // We can do it in a const or directly in the component params

    return (
        <div>
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