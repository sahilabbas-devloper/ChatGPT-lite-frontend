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
        


            <aside className={`flex flex-col w-auto h-full gap-4 bg-gray-900   ${open? "hidden" : "block"} md:block  shadow-white text-white p-5`}>

                <div className='w-full rounded-full  flex items-center gap-10 md:gap-24 mb-8'>
                  
                  <div className="flex items-center gap-2">
                    <img src="Chatgpt.png" alt="logo" 
                    className='rounded-full shadow-sm  w-9 h-9'
                    />
                    <h1 className='text-md font-semibold text-white'>ChatGPT Lite</h1>
                  </div>
                   
                    <button
                    onClick={onbtnClick}
                    className="text-2xl md:hidden"
                    ><RiShareForwardFill/></button>
                </div>

                <button 
                onClick={reload}
                className='font-semibold text-lg mb-4 flex gap-2 items-center '>  <FaPen/> New chats</button>
                <div className="flex items-center gap-2 mb-4">
                    <label htmlFor="" > <FaSearch className="w-5 h-5 "/></label>
                  <input type="search" name="" id=""
                  className="p-1"
                    placeholder=  'Serch chats'
                />
                </div>
                

                <div  className="flex flex-col gap-2">
                     <a href="https://chatgpt.com/images" className='font-semibold text-lg mb-1 flex items-center gap-2'> <FaImage className="w-6 h-6 "/> image</a>
                 <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en_IN" className='font-semibold text-lg mb-1 flex items-center gap-2' > <AiFillAppstore className="w-6 h-6 "/> Apps</a>
                  <a href="https://chatgpt.com/codex" className='font-semibold text-lg mb-4 flex items-center gap-2'> <RiProjectorFill className="w-6 h-6 "/> codex</a>
                </div>
               


                <div className='flex flex-col mb-25 overflow-y-hidden'>
                    <h1 className='font-semibold text-md text-gray-300 mb-4 '>your chats</h1>

                    <div>
                        <h1 className='font-semibold text-lg mb-2'>{pr}</h1>
                       
                    </div>

                </div>


                    <div className='flex items-center  w-auto rounded-2xl gap-2 mb-4'>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/10813/10813372.png" alt="logo" 
                            className='rounded-full shadow-sm  w-10 h-10'
                            />
                        </div>
                            <div>
                           <h1 className='text-md font-semibold text-white'>Guest0.0127</h1>
                           <h1 className='text-sm  font-semibold text-gray-400'>Free</h1>
                            </div>
                       
                    </div>

                <a href="https://chatgpt.com/c/69994cb2-7494-83a7-b9ec-28eabc2ac928#pricing" className='bg-purple-800 text-white hover:bg-purple-700 flex items-center justify-center rounded-2xl h-10 w-full'>Claim offer</a>

            </aside>


    
    )
}

export default Sidebar