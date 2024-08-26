import React from 'react';

const TextAnimation = () => {
    // creating a texts array
    const texts = ["Cybersec", "Web Dev", "Mobile App Dev"];

    // create state variables
    const [index, setIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [text, setText] = React.useState('');
    const [speed, setSpeed] = React.useState(150);

    React.useEffect (() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (charIndex < text[index].length) {
                    setCharIndex((charIndex) => charIndex + 1);
                    setText((prev) => prev + text[index].charAt(charIndex));
                    setSpeed(150);
                } else {
                    setTimeout(() => setIsDeleting(true));
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex((charIndex) => charIndex - 1);
                    setText((prev) => prev.substring(0, prev.length - 1));
                    setSpeed(50);
                } else {
                    setIsDeleting(!isDeleting);
                    setIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };
    
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
    }, [index, charIndex, isDeleting, speed, text, texts.length]);

    return (
        <div className='text-animation-div'>
            <h3 className='x'>I am a <span>{text}</span></h3>
            <span className='cursor'></span>
        </div>
    )

};

export default TextAnimation;