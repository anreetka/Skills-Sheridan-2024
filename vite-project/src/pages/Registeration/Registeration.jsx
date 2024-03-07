import React, { useState } from "react";

const RegistrationPage = () => {
    const [studentNumber, setStudentNumber] = useState("");
    const [email, setEmail] = useState("");
    const [selectedEvent, setSelectedEvent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [registrationClosed, setRegistrationClosed] = useState(false);
    const maxCapacityPerEvent = 5;

    const events = ["Event 1", "Event 2", "Event 3"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!studentNumber || studentNumber.length !== 9) {
            setErrorMessage("Please enter a valid student number.");
            return;
        }
        if (!email || !email.endsWith("@sheridancollege.ca")) {
            setErrorMessage("Please enter a valid Sheridan College email address.");
            return;
        }
        if (!selectedEvent) {
            setErrorMessage("Please select an event.");
            return;
        }

        const today = new Date();
        const eventDate = new Date("March 25, 2024"); // Sample event date
        const timeDifference = eventDate.getTime() - today.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        if (daysDifference <= 3) {
            setRegistrationClosed(true);
            setErrorMessage("Registration is closed. Please contact event organizers for assistance.");
            return;
        }
        // If all validations pass, proceed with registration
        console.log("Registration successful!");

        console.log({
            studentNumber,
            email,
            selectedEvent
        });

        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                studentNumber,
                email,
                selectedEvent
            }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

        setStudentNumber("");
        setEmail("");
        setSelectedEvent("");
        setErrorMessage("");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Event Registration</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form action='http://localhost:3001/api/register' method="POST" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="studentNumber">Student Number:</label>
                            <input type="text" className="form-control" name='studentNumber' id="studentNumber" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Sheridan College Email:</label>
                            <input type="email" className="form-control" name='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="event">Select Event:</label>
                            <select className="form-control" id="event" name='selectedEvent' value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                                <option value="">Select Event</option>
                                {events.map((event, index) => (
                                    <option key={index} value={event}>{event}</option>
                                ))}
                            </select>
                        </div>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {registrationClosed && <div className="alert alert-warning">Registration is closed. Please contact event organizers for assistance.</div>}
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-custom" style={{ fontSize: '1.2rem', backgroundColor:'#003568', color:'white' }} >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
