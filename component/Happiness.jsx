import Image from "next/image";
import { useRef } from "react";
import {motion} from 'framer-motion';
function Happiness() {
   const ImageAnimations = {
    offscreen: {x:200},
    onscreen:{x:0,
        transition: {type: "spring", bounce: 0.4, duration:3}
    }
   }
   const TextAnimate = {
        offscreen: {x:-200},
        onscreen:{x:0,
            transition: {type: "spring", bounce: 0.4, duration:3}
    }
   }
    return(
        <div className="h-screen flex justify-center items-center flex-col md:flex-row-reverse gap-16  md:gap-32">
            <motion.div 
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{once:true , amount:0.4}}
                variants={ImageAnimations}
                className="relative max-w-lg h-4/5 w-9/12  md:w-full">
                <Image className="shadow-3xl " src='/Happiness.jpg' fill/>
            </motion.div>
            <div className="text-3xl text-center  flex justify-center items-center">
                <motion.p variants={TextAnimate} viewport={{once:true, amount:0.4}} initial={'offscreen'} whileInView={'onscreen'} className="max-w-sm">I'm filled with an incredible sense of happiness and contentment.</motion.p>
            </div>

        </div>
    )
}
export default Happiness;