import React from "react";

const Gallery = () => {
    const images = [
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
        "https://media-www.sheridancollege.ca/-/media/project/sheridan/shared/images/newsroom/news-releases/2023/skills-sheridan-podium.jpg?rev=3c2c71c9602948eeadeaeeb41f129d19",
    ];

    return (
        <div className="container">
            <h1 className="text-center my-4" style={{ fontSize: '50px' }}>PHOTOS GALLERY</h1>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={image} className="card-img-top" alt={`Image ${index + 1}`} />
                            <div className="card-body">
                                <h5 className="card-title">Image {index + 1}</h5>
                                <p className="card-text">Description of the image goes here.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
