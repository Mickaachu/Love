import Image from "next/image";
import {motion, } from 'framer-motion';
function Smile() {
    const ImageAnimations = {
        offscreen: {x:-200},
        onscreen:{x:0,
            transition: {type: "spring", bounce: 0.4, duration:3}
        }
       }
       const TextAnimate = {
            offscreen: {x:200},
            onscreen:{x:0,
                transition: {type: "spring", bounce: 0.4, duration:3}
        }
       }
    return (
        <div  className="h-screen flex justify-center items-center flex-col md:flex-row gap-16  md:gap-32">
            <motion.div  initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{once:true, amount:0.4}}
                variants={ImageAnimations}
                className="relative max-w-lg h-80 w-9/12 md:h-4/5 md:w-full">
                <Image src='/smile.jpg' fill />
            </motion.div>
            <div className="text-3xl text-center  flex justify-center items-center">
                <motion.p initial={'offscreen'}
                whileInView={'onscreen'}
                variants={TextAnimate}
                viewport={{once:true, amount:0.4}} className="max-w-sm">Your smile is like a ray of sunshine in my life.</motion.p>
            </div>
        </div>
    )
}
export default Smile;