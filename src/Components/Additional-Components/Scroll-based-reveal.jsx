import React from "react";
import 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/App.css';

const ScrollBasedReveal = ({ children }) => {
    React.useEffect(() => {
        const sections = document.querySelectorAll('section');

        // convert NodeList [sections] to an array.
        const itemsArray = Array.from(sections);

        // create revealSections function
        const revealSections = () => {
            //reference windowHeight
            const windowHeight = window.innerHeight;

            itemsArray.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealSections);

        //Initial check
        revealSections();

        //Effect Cleanup
        return () => {
            window.removeEventListener('scroll', revealSections);
        };
    }, []);

    return (
        <div className="">
            {children}
        </div>
    )
};

export default ScrollBasedReveal;