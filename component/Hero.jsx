'use client';
import {motion, useScroll, useTransform} from 'framer-motion';
import { useState, useRef } from 'react';
function Hero() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: [" end", "end start"]
    })
    const opacity = useTransform(scrollYProgress,[0, 0.5], [1,0])

    return (
        <motion.div style={{opacity}} ref={targetRef}  className="h-screen flex justify-center items-center">
            <div>
                <h1>Hi my love</h1>
            </div>
        </motion.div>
    )
}
export default Hero;