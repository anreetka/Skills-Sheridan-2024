import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/registrations');
                setRegistrations(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchRegistrations();
    }, []);

    return (
        <div>
            <h1 className='text-center'>Registration List</h1>
            <ul>
                {registrations.map((registration, index) => (
                    <li key={index}>
                        <p>Student Number: {registration.studentNumber}</p>
                        <p>Email: {registration.email}</p>
                        <p>Selected Event: {registration.selectedEvent}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
