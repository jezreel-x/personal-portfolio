import React from "react";
import Navbar from "../Navbar-Components/Navbar";
import ImageCarousel from "../Additional-Components/ImageCarousel";
import Footer from "./Footer";

import '../../portfolio.css';

import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";

import HackerRoomImage from '../../Assets/hacker-room.png';

import Modal from "../Footer-Components/Modal";
import ScrollBasedReveal from "../Additional-Components/Scroll-based-reveal";



const Products = ({ isOpen, onClose }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        openModal();
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <section className="section">
                <ScrollBasedReveal>
                    <div className="product-div">
                        <div className="ImageCarousel-div">
                            <ImageCarousel />
                            <button className="inquire-btn" type="button" onClick={handleModalOpen}>Inquire</button>
                        </div>
                        <div className="info-div">
                            <p style={{ 
                                fontSize: '40px', 
                                color: '#0f1617',
                                fontFamily: 'Georgia'
                            }}><b>Personal/Professional Websites</b></p>
                            <p className="paragraph">
                            <b>
                            Your online presence and the dedication to running your operations/business smoothly is important to us,
                            and we understand the importance of having a professional, 
                            appealing website that truly reflects your business. 
                            <br /><br />
                            My expertise lies in creating scalable applications across the stack, 
                            ensuring that a seamless user experience is achieved with appealing user interfaces.
                            <br /><br />
                            Ready to take your online presence to the next level? Get in touch with us today to discuss 
                            how we can create and deploy a professional website that sets your business apart 
                            from the competition.
                            </b>
                            </p>
                        </div>
                    </div>
                </ScrollBasedReveal>
            </section>

            <section className="section">
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
    );
};

export default Products;