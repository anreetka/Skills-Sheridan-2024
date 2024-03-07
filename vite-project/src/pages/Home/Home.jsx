import React from "react";

const Home = () => {
    return (
        <div className="container-fluid p-0">
            <div style={{ 
                backgroundImage: `url("https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2022/world-skills-2022/politicians-speaking.jpg?h=1366&iar=0&w=2048&rev=f886c165996f4d3eb95b0ccc9c37ca1b&hash=C392EF08EC72AF250E03FC5CF7CE2A1D")`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '700px',
                position: 'relative',
                }}>
                <h1 style={{ 
                    color:'white', 
                    textAlign: 'center', 
                    fontSize:'70px',
                    position: 'absolute',
                    top: '85%',
                    left: '60%',
                    width:'100%',
                    transform: 'translate(-50%, -50%)'
                }}>WELCOME TO SKILLS SHERIDAN</h1>
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh' }}>
                    <button type='button' style={{width:'12%', height: '7%', color: 'white', marginTop:'20%',backgroundColor:'#003568', border: '1px solid white', borderRadius:'10px'}}>Register</button>
                </div> */}
            </div>
        </div>
    );
};

export default Home
