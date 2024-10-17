import {motion} from 'framer-motion'

const Motion = () => {

  

    const parent = {
        hidden:{opacity:0,scale:0.5},
        visible:{opacity:1,scale:1}
    }

    const children = {
        hidden:{opacity:0,scale:0.2},
        visible:{opacity:1,scale:1},
        
        
    }

    return (
        <div className=''>
            <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
            transition={{duration:1,delayChildren:1,staggerChildren:0.5}}
            className="bg-sky-400 p-10 rounded-md grid grid-cols-2 gap-4 justify-center items-center">
                <motion.div
                variants={children}
                 className='w-[80px] h-[80px] bg-white rounded-md'></motion.div>
                <motion.div variants={children} className='w-[80px] h-[80px] bg-white rounded-md'></motion.div>
                <motion.div variants={children} className='w-[80px] h-[80px] bg-white rounded-md'></motion.div>
                <motion.div variants={children} className='w-[80px] h-[80px] bg-white rounded-md'></motion.div>
            </motion.div>
        </div>
    );
};

export default Motion;