import React from 'react';
import officeImage from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/office.jpg';
import codingImg from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/coding-img.jpg';
import mobileApp from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/mobile.jpg';
import aiGenerated from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/ai-generated.jpg';
import '.../portfolio.css';


const images = [
    officeImage,
    codingImg,
    mobileApp,
    aiGenerated
];


const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='carousel'>
            <button className='carousel-btn left' onClick={handlePrevClick}>&#8592;</button>
            <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
            <button className='carousel-btn right' onClick={handleNextClick}>&#8594;</button>
        </div>
    )
};


export default ImageCarousel;