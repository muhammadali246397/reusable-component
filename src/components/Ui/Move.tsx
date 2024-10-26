import { easeInOut, motion, useInView, } from 'framer-motion'
import { useRef } from 'react';

const initial = {
    initial: { x: 0, y: 0 },
    visiable: {
        x: [0, 100, -100, 0],
        y: [0, 100, -100, 0],
        transition: { duration: 2, repeat: Infinity, ease: easeInOut }
    },

}



const Move = () => {

    const ref = useRef(null);
    const inView = useInView(ref,{once:true})

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-slate-100">
                <motion.div
                    variants={initial}
                    initial="initial"
                    animate="visiable"

                    className='w-[300px] h-[300px] rounded-md bg-red-700'
                ></motion.div>
            </div>
            <motion.div 
             ref={ref}
             
            
              className='flex justify-center items-center h-screen bg-slate-200'>
                <motion.div
                animate = {inView ? {x:0,opacity:1, transition:{delay:0.70,ease:"easeIn"}}:{x:-500,opacity:0}}
                className='border-2 border-purple-800 rounded-md p-20'>
                    <motion.div
                    animate = {inView ? {scale:1, transition:{delay:1.20,ease:"easeIn"}}:{scale:0}}
                    className='w-[300px] h-[300px] rounded-md bg-blue-700'></motion.div>
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Move;