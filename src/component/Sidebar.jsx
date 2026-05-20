import { FaPen,FaSearch , FaImage  } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { RiShareForwardFill} from "react-icons/ri"
import { useState} from 'react'


function Sidebar({onbtnClick,open}) {
 

   const pr = localStorage.getItem("prompt")
        
    const reload = () => {
        window.location.reload();
    }
  

    return (
        


            <aside className={`flex flex-col w-80 h-full gap-4 bg-gray-900  z-50 fixed  transition-transform duration-500 ease-in-out  ${open ?  "translate-x-0" : "-translate-x-150"}  md:block  shadow-white text-white p-5`}>

                <div className='w-full rounded-full  flex items-center gap-30 md:gap-30 mb-8'>
                  
                  <div className="flex items-center gap-2">
                    <img src="nexus-icon.png" alt="logo" 
                    className='rounded-full object-contain shadow-sm  w-9 h-9'
                    />
                    <h1 className='text-lg font-bold bg-linear-to-r from-pink-600 via-purple-600 to-purple-600  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text'>N E X U S</h1>
                  </div>
                   
                    <button
                    onClick={() => onbtnClick(!true)}
                    className="text-2xl"
                    ><RiShareForwardFill/></button>
                </div>

                <button 
                onClick={reload}
                className='font-semibold text-lg mb-4 flex gap-2 items-center '>  <FaPen/> New chats</button>
               
                



                <div className='flex flex-col mb-25 overflow-y-hidden'>
                    <h1 className='font-semibold text-md text-gray-300 mb-4 '>your chats</h1>

                    <div>
                        <h1 className='font-semibold text-lg mb-2'>{pr}</h1>
                       
                    </div>

                </div>

            </aside>


    
    )
}

export default Sidebar