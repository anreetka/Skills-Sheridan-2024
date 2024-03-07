import React, { useState } from "react";

const Feedback = () => {

    const events =["Event 1", "Event 2", "Event 3"];
    const[selectedEvent, setSelectedEvent] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/api/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                selectedEvent,
                feedback,
            }),
        });

        console.log(response.body);

        setFeedback("");
        setSelectedEvent("");
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center mb-4">YOUR FEEDBACK MATTERS</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4" style={{fontSize:'20px'}}>Thank you for attending Skills Sheridan this year. <br/>We value your feedback to improve our event for next time.</h5>
                            <form action="http://localhost:3001/api/submit-feedback" method="POST" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="event" className="font-weight-bold" style={{fontSize:'20px'}}>Event Name:</label>
                                    <select className="form-control" id="event" name="selectedEvent" value={selectedEvent} onChange={(e)=> setSelectedEvent(e.target.value)}>
                                        <option value="">Select Event</option>
                                        {events.map((event, index)=>(
                                            <option value={event} key={index}>{event}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="feedback" className="font-weight-bold" style={{fontSize:'20px'}}>Your Feedback:</label>
                                    <textarea
                                        id="feedback"
                                        className="form-control"
                                        rows="5"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        placeholder="Enter your feedback here..."
                                        style={{ fontSize: '1.2rem' }}
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary" style={{backgroundColor:'#003568', color:'white'}}>Submit Feedback</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
