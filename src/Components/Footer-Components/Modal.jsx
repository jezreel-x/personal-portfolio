import React from "react";
import 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/portfolio.css';


const Modal = ({ isOpen, onClose, children }) => {

    React.useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="wrapperDiv">
            <button className="close-button" onClick={onClose}>X</button>
            {/* 
            <div id="nestedDiv1" className="nestedDiv">
                <img className="modalImg" src={HackerRoomImage} alt="prof-pic" />
            </div>
            <div id="nestedDiv2" className="nestedDiv">
                <p>Call/Text via WhatsApp on: </p>
                <div>
                    <span><AiTwotoneMessage size={'30px'} color={"black"} /></span>
                    <span><PiPhoneCallDuotone size={'30px'} color={"black"} /></span>
                </div>
                <p id="phoneNumber"><b>0705477493</b></p>
            </div>
            */}
            {children}
        </div>
    )
};

export default Modal;