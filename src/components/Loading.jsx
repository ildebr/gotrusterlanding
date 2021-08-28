import React from "react";
import { motion } from "framer-motion";
import logo from '../asset/images/logo.svg';

const Loading = () => (
    <div style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <motion.img
            src={logo}
            style={{height: '100%', width: 'auto'}}
            animate={{
                opacity: [0.2, 1, 1, 0],
                scale: [0.6, 0.9, 0.9, 0.6],
                rotate: [0, 360, 360],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.8,
            }}
        />
    </div>
);

export default Loading;
