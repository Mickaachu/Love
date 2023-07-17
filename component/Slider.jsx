"use client";

import Image from "next/image";
import { motion, spring } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

function Slider() {
    const [width,setWidth] = useState(0);
    const carousel = useRef() ;
    const images = ['/car1.jpg','/car2.jpg','/car3.jpg','/caro4.jpg','/cars5.jpg','/caro6.jpg']
    
    useEffect(() => {
     
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[]);
    
    return(
        <div className="h-screen flex justify-center gap-2 flex-col text-center">
            <p className="text-lg md:text-3xl"> I'm excited to have more happy moments with you</p>
            <div className="flex justify-center gap-2 items-center pt-16">
                <p className="text-lg text-gray-400">drag images to left</p>
                
                <Image src='/drag-and-drop.png' width={48} height={48}/>
                
            </div>
            <motion.div ref={carousel} className="cursor-grab overflow-hidden px-3" >
                <motion.div drag='x' dragConstraints={{right:0, left: -width }} className="flex gap-20">
                    {images.map(image => {
                        return(
                            <motion.div className="min-w-carousel" key={image}>
                                <Image className="w-full h-full pointer-events-none" alt={image} src={`${image}`} width={358} height={426}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            

        </div>
    )
}
export default Slider;