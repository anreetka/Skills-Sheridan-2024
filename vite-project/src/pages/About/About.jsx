import React from "react";

const About = () => {
    return (
        <div className="container" style={{marginTop:'2%'}}>
            <h1 className="text-center mb-4" style={{ fontSize: '3.5rem' }}>ABOUT SHERIDAN</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h1 className="card-title">Our Campuses</h1>
                            <p className="card-text">
                                Founded in 1967, Sheridan has grown from a local college of 400 students to one of Ontario's leading postsecondary institutions, educating approximately 23,116 full-time and 1,741 part-time students every year on three campuses in three Ontario cities — Oakville, Brampton, and Mississauga.
                            </p>
                            <img src='https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/campuses/davis/davis_campus_entrance.jpg?rev=337385383a16403695ab40c23ff4d968&w=1024&hash=F70D342BDB3534F95387CB8C5A3ADEA9'className="img-fluid" style={{height: '300px', marginBottom:'5%'}} alt="Our Campuses" />
                            <a href="/campuses" className="btn btn-custom" style={{backgroundColor:'#003568', color:'white'}}>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h1 className="card-title">Our Programs</h1>
                            <p className="card-text">
                                Sheridan offers over 120 diploma, certificate, and bachelor's degree programs in arts, business, community services, health, technology, and the skilled trades. With a focus on experiential learning, Sheridan provides students with hands-on, industry-relevant education that prepares them for success in their careers.
                            </p>
                            <img src='https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/sheridan-program/bachelor-animation-cartoons.png?rev=5636f4f7ec1d4927b90e4f028e63e63c' className="img-fluid" style={{height: '300px', marginBottom:'5%'}} alt="Our Programs" />
                            <a href="/programs" className="btn btn-custom" style={{backgroundColor:'#003568', color:'white'}}>Explore Programs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
