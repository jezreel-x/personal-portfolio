import React from "react";

const Car = () => {
    // window resize
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth(window.innerWidth)
            });
        }; // useEffect clean-up
    }, []);

    return (
        <>{windowWidth}</>
    )
};

export default Car;