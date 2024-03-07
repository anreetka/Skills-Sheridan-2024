import React, { useState } from "react";
import '../../App.css'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container ml-3 mt-2">
                <div className='company-icon'>
                    <img className='img-fluid mt-0' width='40%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sheridan_College_2013_logo.svg/450px-Sheridan_College_2013_logo.svg.png' alt='logo-image'/><br/>
                    <p className="mt-2" style={{fontSize: '25px'}}>Skills Sheridan</p>
                </div>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
               <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                     <ul className="navbar-nav mr-0">
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link " href="/">Home</a></li>
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link" href="/Gallery">Gallery</a></li>
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link" href="/List">List</a></li>
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link" href="/Feedback">Feedback</a></li>
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link" href="/Register">Register</a></li>
                        <li className="nav-item mr-4" style={{fontSize: '18px'}}><a className="nav-link" href="/About">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
