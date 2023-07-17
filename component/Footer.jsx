import Image from "next/image";
import { motion } from "framer-motion";
function Footer() {
    const TextAnimate = {
        offscreen: {y:200, opacity:0},
        onscreen:{y:0, opacity:1,
            transition: {type: "spring", bounce: 0.4, duration:3}
    }
   }
   const img1Anim = {
    offscreen: {x:-100},
    onscreen: {
        x:0,rotate:[-90,45,],
        transition:{type: "spring", bounce: 0.4, duration:3}
    }
   }
   const img2Anim = {
    offscreen: {x:-200},
    onscreen: {
        x:0,rotate:[-180,30,],
        transition:{type: "spring", bounce: 0.4, duration:3}
    }
   }
   const img3Anim = {
    offscreen: {x:100},
    onscreen: {
        x:0,rotate:[90,-45,],
        transition:{type: "spring", bounce: 0.4, duration:3}
    }
   }
   const img4Anim = {
    offscreen: {x:200},
    onscreen: {
        x:0,rotate:[180,-30,],
        transition:{type: "spring", bounce: 0.4, duration:3}
    }
   }


    return(
        <div className="text-center overflow-hidden relative h-screen w-screen flex justify-center items-center pt-30">
            <motion.h2 view  variants={TextAnimate} viewport={{once:true}} initial={'offscreen'} whileInView={'onscreen'}
            className="pb-72 z-10">
                Happy 15th month, my love.
            </motion.h2>
            <motion.div
                variants={img1Anim}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{once:true}}
             className="hidden rotate-45 md:block absolute absolute left-0 top-0 overflow-hidden">
                <Image  src='/cars5.jpg' width={400} height={300}/>
            </motion.div>
            <motion.div
            variants={img2Anim}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true}}
             className="absolute -bottom-48 md:bottom-30 -left-14 md:left-36  md:left-48 overflow-hidden">
                <Image src='/car1.jpg' width={430} height={330}/>
            </motion.div>
            <motion.div
                variants={img3Anim}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{once:true}}
            className="absolute -bottom-60 md:bottom-30  -rotate-45 -right-36 md:right-60  overflow-hidden">
                <Image src='/gray.jpg' width={430} height={330}/>
            </motion.div>
            <motion.div
            variants={img4Anim}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{once:true }}
                className="hidden md:block absolute -right-20 -rotate-45 top-0 overflow-hidden">
                <Image src='/car3.jpg' width={400} height={300}/>
            </motion.div>
        </div>
    )
}
export default Footer;