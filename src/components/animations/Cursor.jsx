import React, { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const cursorBlurEffect = document.querySelector('.cursor-blur-effect');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX - cursorBlurEffect.offsetWidth / 2;
            const y = e.clientY - cursorBlurEffect.offsetHeight / 2;
            cursorBlurEffect.style.transform = `translate(${x}px, ${y}px)`;
        });
    }, []);

    return (
        <div className="cursor-blur-effect"></div>
    );
};

export default Cursor;
