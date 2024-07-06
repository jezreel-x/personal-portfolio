import React from "react";
import webDev from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/web-development.png';
// import hackerImg from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/hacker.jpeg';
import hacker from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/hacker-img.png';
import mobileApp from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/mobile.jpg';
import { IoCodeSlash } from "react-icons/io5";
import Footer from "./Footer";


const Services = () => {

    // styling 
    const buttonStyles = {
        width: '140px',
        borderRadius: '16px',
        backgroundColor: 'aqua',
        border: '1px solid #888',
        padding: '8px',
        boxShadow: '5px 5px 12px #888',
        alignSelf: 'center',
        marginBottom: '16px'
    };

    return (
        <div>
            <div id="serviceDiv">
                <h1 style={{ fontFamily: 'Georgia', color: '#024950' }}>My Services</h1>
            </div>
            <div id="serviceBody">
                <div className="card" id="card1">
                    <img className="web-dev" src={webDev} alt="web-development" />
                    <IoCodeSlash style={{ paddingLeft: '130px' }} size="50px" color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center'
                    }}>Web Development</p>
                    <button className="btn" style={buttonStyles} type="button">
                        <span style={{ color: '#024950' }}>Read more</span>
                    </button>
                </div>
                <div className="card">
                <img className="web-dev" src={hacker} alt="web-development" />
                    <IoCodeSlash style={{ paddingLeft: '130px' }} size="50px" color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center'
                    }}>Cybersecurity</p>
                    <button className="btn" style={buttonStyles} type="button">
                        <span style={{ color: '#024950' }}>Read more</span>
                    </button>
                </div>
                <div className="card">
                <img className="web-dev" src={mobileApp} alt="web-development" />
                    <IoCodeSlash style={{ paddingLeft: '130px' }} size="50px" color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center'
                    }}>Mobile Development</p>
                    <button className="btn" style={buttonStyles} type="button">
                        <span style={{ color: '#024950' }}>Read more</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Services;