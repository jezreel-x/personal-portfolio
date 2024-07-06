import React from "react";
import TextAnimation from "./TextAnimation";
import hackerImg from 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/Assets/hacker.jpeg';
import Footer from "./Footer";
// import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";


const Home = () => {
    return (
        <div>
            <div style={{ marginLeft: '38px', fontFamily: 'Georgia', marginRight: '38px' }}>
                <p style={{ color: '#024950' }}>
                    <span><h1>Hello there,</h1></span>
                    <span><h3>Mutonga Romeo here;</h3></span>
                    <span><TextAnimation /></span>
                </p>
                <div 
                className="intro" 
                style={{ 
                    width: '100%', 
                    boxSizing: 'border-box', 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <h2 style={{ fontFamily: 'Georgia', width: '50%', color: '#024950', fontWeight: 'bold' }}>
                        I am a dedicated software engineer with several years of experience. My expertise lies in creating 
                        scalable applications across the stack, ensuring that a seamless user experience is achieved with appealing
                        user interfaces.
                        <br /> <br />
                        I am also well-versed with Cybersecurity analysis. I do bug bounty, pen-testing and vulnerability 
                        assessments to eradicate any potential loopholes that malicious threat actors can utilize to
                        gain unauthorized access to your systems.
                    </h2>
                    <img className="hacker-img" src={hackerImg} alt="hacker-img" />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;