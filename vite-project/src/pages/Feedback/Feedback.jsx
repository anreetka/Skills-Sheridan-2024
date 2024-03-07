import React, { useState } from "react";

const Feedback = () => {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission
        console.log("Feedback submitted:", feedback);
        // You can submit the feedback data to the backend or perform further actions here
        // Reset the feedback state after submission
        setFeedback("");
    };

    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center mb-4">YOUR FEEDBACK MATTERS</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4" style={{fontSize:'20px'}}>Thank you for attending Skills Sheridan this year. <br/>We value your feedback to improve our event for next time.</h5>
                            <form onSubmit={handleSubmit}>
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
