import React from 'react';

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

export default Location;