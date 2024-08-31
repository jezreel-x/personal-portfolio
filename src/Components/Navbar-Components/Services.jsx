import React from "react";
import webDev from '../Assets/web-development.png';
// import hackerImg from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/hacker.jpeg';
import hacker from '../Assets/hacker-img.png';
import mobileApp from '../Assets/mobile.jpg';

import '../../portfolio.css';

// import Footer from "./Footer";
import { DiAndroid, DiApple, DiTerminal, DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom";


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
        marginBottom: '20px'
    };

    return (
        <div>
            <div id="serviceDiv">
                    <h1 style={{ fontFamily: 'Georgia', color: '#024950' }}>My Services</h1>
            </div>
            <div id="serviceBody">
                <div className="card" id="card1">
                    <img className="web-dev" src={webDev} alt="web-development" style={{
                        width: '40%',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '9px',
                        height: '110px',
                        borderRadius: '12px',
                    }}/>
                    <DiJavascript1 style={{ alignSelf: 'center' }} size={40} color="aqua" />
                    <p style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '16px'
                    }}>Web Development</p>
                    <button className="btn" style={buttonStyles} type="button">
                        <Link to='/about' style={{ 
                            color: '#024970', 
                            fontFamily: 'Georgia', 
                            fontWeight: 'bold',
                            textDecoration: 'none'
                        }}>
                            Read more
                        </Link>
                    </button>
                </div>
                <div className="card">
                <img className="web-dev" src={hacker} alt="web-development" />
                    <DiTerminal style={{ alignSelf: 'center' }} size={40} color="aqua" />
                    <span style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '16px'
                    }}>Cybersecurity</span>
                    <button className="btn" style={buttonStyles} type="button">
                        <Link to='/about' style={{ 
                            color: '#024970', 
                            textDecoration: 'none',
                            fontFamily: 'Georgia', 
                            fontWeight: 'bold' 
                            }}>Read more
                        </Link>
                    </button>
                </div>
                <div className="card">
                <img className="web-dev" src={mobileApp} alt="web-development" />
                    <div className="mobile-icons">
                        <DiAndroid size={40} color="aqua" />
                        <DiApple style={{ marginLeft: '8px' }} size={40} color="aqua" />
                    </div>
                    <scan style={{ 
                        fontFamily: 'Georgia', 
                        color: 'aqua', 
                        fontWeight: 'bold', 
                        fontSize: '30px',
                        alignSelf: 'center',
                        marginTop: '16px',
                        marginBottom: '16px'
                    }}>Mobile Development</scan>
                    <button className="btn" style={buttonStyles} type="button">
                        <Link to='/about' style={{ 
                            color: '#024970', 
                            fontFamily: 'Georgia', 
                            fontWeight: 'bold',
                            textDecoration: 'none' 
                        }}>Read more</Link>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Services;