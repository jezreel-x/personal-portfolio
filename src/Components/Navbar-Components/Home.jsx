import React from "react";
import TextAnimation from "../Additional-Components/TextAnimation";
import hackerImg from '.../Assets/hacker.jpeg';
import Footer from "../Footer-Components/Footer";
// import Navbar from "./Navbar";
import Services from "./Services";
import Projects from "./Projects";
import { Link, Outlet } from "react-router-dom";

import '.../portfolio.css';
import myImage from '.../Assets/profile-photo.jpg';

import ScrollBasedReveal from "../Additional-Components/Scroll-based-reveal";

import HackerRoomImage from '.../Assets/hacker-room.png';
import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";

import Modal from "../Footer-Components/Modal";
import useScrollWithOffset from "../Additional-Components/UseScrollWithOffset";

// import Car from "../Car";
// import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";


const Home = () => {
    /* 
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    
    const scrollToSection = (ref) => {
        window.scrollTo ({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    };
    */

    // const carName = "Tesla";
    
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const handleModalOpen = (event) => {
        event.preventDefault();
        openModal();
    };

    useScrollWithOffset(10);

    return (
        <div>
            { /* <div style={{ marginBottom: '20px' }}>Hello World!</div> */ }
            <section className="navbar-section section">
                <div id="mainDiv">
                    <div id="div1">
                        <div id="div2">
                            <img className="personalImage" src={myImage} alt="prof-pic" />
                            <h3 className="personal-portfolio">Personal Portfolio</h3>
                        </div>
                        <nav>
                            <ul>
                                <li className="nav-link">
                                    <Link to="/#sectionIntro" className="custom-link">Intro</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/#section1Ref" className="custom-link"/* onClick={ () => scrollToSection(section1Ref) } */>Services</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/#section2Ref" className="custom-link"/* onClick={ () => scrollToSection(section2Ref) } */>Projects</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/#section3Ref" className="custom-link"/* onClick={ () => scrollToSection(section3Ref) } */>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div><Outlet /></div>
                </div>
            </section>

            {/* <Car brand= {carName} /> */}

            <section id="sectionIntro" className="section">
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
            </section>

            <section id="section1Ref" className="section">
                <ScrollBasedReveal style={{ marginTop: '100px' }}>
                    <Services />
                </ScrollBasedReveal>
            </section>
            
            <section id="section2Ref" className="section">
                <ScrollBasedReveal style={{}}>
                    <Projects />
                </ScrollBasedReveal>
            </section>
        

            <section id="section3Ref" className="section" >
                <ScrollBasedReveal>
                    <div><Footer modalClick={handleModalOpen} /></div>
                </ScrollBasedReveal>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div id="nestedDiv1" className="nestedDiv">
                    <img className="modalImg" src={HackerRoomImage} alt="prof-pic" />
                </div>
                <div id="nestedDiv2" className="nestedDiv">
                    <p style={{ color: 'white' }}>Call/Text via WhatsApp on: </p>
                    <div>
                        <span><AiTwotoneMessage style={{ marginRight: '10px' }} size={'30px'} color={"black"} /></span>
                        <span><PiPhoneCallDuotone size={'30px'} color={"white"} /></span>
                    </div>
                    <p id="phoneNumber"><b>0705477493</b></p>
                </div>
            </Modal>

        </div>
    )
};

export default Home;