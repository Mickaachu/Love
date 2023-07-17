import Image from "next/image";
import {motion} from 'framer-motion';

function Gray() {
    const TextAnimate = {
        offscreen: {x:-200, opacity:0},
        onscreen:{x:0, opacity:1,
            transition: {type: "spring", bounce: 0.4, duration:3}
    }
   }

    return(
        <div className="h-screen  bg-gray-200  py-10 md:my-40 flex justify-center items-center flex-col md:flex-row gap-10  md:gap-32">
            <div className="text-3xl text-black text-center md:pt-24  flex justify-center items-center">
                <motion.p
                    variants={TextAnimate} viewport={{once:true, amount:0.4}} initial={'offscreen'} whileInView={'onscreen'}
                 className="max-w-sm " >
                    Every moment has brought me an indescribable level of happiness.
                 </motion.p>
            </div>
            <div className="relative max-w-lg pb-24 h-4/5 w-9/12">
                <Image src='/gray.jpg' fill/>
            </div>
            
        </div>
    )
}
export default Gray;