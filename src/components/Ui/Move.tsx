import {motion,} from 'framer-motion'

const initial = {
    initial : {x:0, y:0},
    visiable:{
        x:[-500, 0, 500, 0 ],
        y:[0, -400, 0, 400],
        transition:{duration:2, repeat:Infinity,}
    },
  
}



const  Move= () => {



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
        </div>
    );
};

export default Move;