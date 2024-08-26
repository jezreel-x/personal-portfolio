import React from "react";
import { useInView } from "react-intersection-observer";
import 'C:/Users/User/Desktop/Portfolio-Project/portfolio-app/src/portfolio.css';


const ScrollReveal = ({ children, className = '', threshold = 0.1, ...props }) => {

    const [isVisible, setIsVisible] = React.useState(false);

    const { ref, inView, entry } = useInView({
        threshold: threshold,
        triggerOnce: false,
    });

    React.useEffect(() => {
        if (inView) {
            setIsVisible(true)
        }
    }, [inView]);

    React.useEffect(() => {
        if (entry && entry.target) {
          const element = entry.target;
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight - 100) {
            setIsVisible(true);
          }
        }
      }, [entry]);

    return (
        <div id="scrollRevealDiv"
        ref={ref}
        className={`${className} ${isVisible ? 'visible' : 'hidden'}`}
        {...props}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;