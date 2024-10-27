import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const TexthoverEffect = ({ text }) => {
    const CharacterVariants = {
        hover: {
            scale: 1.3,
            transition: {
                type: 'w',
                duration: 0.1,
            },
        },
    };

    return (
        <div style={{ display: "flex" }}>
            {Array.from(text).map((char, index) => (
                <motion.span
                    key={index}
                    variants={CharacterVariants}
                    whileHover="hover"
                    style={{ display: 'inline-block', margin: '0 2px', cursor: "pointer",letterSpacing:"-3px" }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
}

export default TexthoverEffect;
