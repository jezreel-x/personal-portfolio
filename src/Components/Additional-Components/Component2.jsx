import React from "react";
import { useLocation } from "react-router-dom";
// import Component3 from "./Component3";

const Component2 = (offset) => {
    const location = useLocation();

    React.useEffect(() => {
        if(location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if(element) {
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        }
    }, [location.hash, offset]);

    /*
    return (
        <>
            <div>{`Hello Component2`}</div>
        </>
    );
    */
};

export default Component2;