import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { service_name } = useParams();
    return (
        <div>
            <h2>this is booking: {service_name}</h2>
        </div>
    );
};

export default Booking;