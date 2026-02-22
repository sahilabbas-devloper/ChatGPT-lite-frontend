import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { IoMdSend } from "react-icons/io"
import { TbNotes } from "react-icons/tb"
import { RiPencilRulerLine } from "react-icons/ri"
import { AiOutlineCode } from "react-icons/ai"
import { PiGraduationCapFill } from "react-icons/pi"
import { FiEye } from "react-icons/fi"
import { HiOutlineLightBulb } from "react-icons/hi"
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
const BASE_URL = import.meta.env.VITE_API_URL;



function Home() {

    const [prompt, setprompt] = useState('')
    const [result, setresult] = useState('')
    const [chats, setchats] = useState([])
    const [loading, setloading] = useState()
    const [hide, sethide] = useState(true)
    const [open, setopen] = useState()



    const send = async () => {

        if (!prompt) return;
        setloading(true)
        sethide(false)
        try {
            const res = await axios.post(`${BASE_URL}/askgpt`, { prompt })
            console.log(res.data.massage)
            localStorage.setItem("prompt", prompt)
            setresult(res.data.massage)
        } catch (error) {
            console.log("axios send error", error)
        } finally {

            setloading(false)
        }


    }
    useEffect(() => {
        if (result !== "") {
            const chat = {
                prompt: prompt,
                result: result,
            }

            setchats((prev) => [...prev, chat])
            setprompt('')
            setresult('')

        }
    }, [result])

    const handel = () => {
        send()

    }



    const show = () => {
        if (open === false) {
            setopen(true)
        } else {
            setopen(false)
        }

    }



    return (
        <div className='overflow-y-hidden '>
            <section className='w-full min-h-screen bg-gray-900'>
                <div className='flex min-h-screen  '>


                    <div className='flex  w-full '>

                        {/*sidebar*/}
                        <div className={`h-full w-100  ${open ? "hidden" : "block"} md:block `}>
                            <Sidebar
                                onbtnClick={show}
                                open={open}
                            />
                        </div>


                        {/*Home section*/}
                        <div className='flex  flex-col h-full justify-between text-white  bg-gray-800 w-full '>


                            {/*navbar home section*/}
                            <nav className='w-full p-2 pr-5 bg-gray-900 rounded-b-2xl h-auto flex items-center justify-between gap-2 mb-4'>
                                <div className='flex gap-2 items-center'>
                                    <img src="Chatgpt.png" alt="logo"
                                        className='rounded-full shadow-sm  w-6 h-6'
                                    />
                                    <h1 className='text-md font-semibold text-white'>ChatGPT Lite</h1>
                                </div>
                                <a href='https://chatgpt.com/c/69994cb2-7494-83a7-b9ec-28eabc2ac928#pricing' className='bg-purple-800 hover:bg-purple-700 text-white md:flex items-center justify-center hidden  rounded-2xl h-10 w-30'>free offers</a>
                                <button
                                    onClick={show}
                                    className='md:hidden block text-2xl text-purple-200 font-semibold'>&#9776;</button>
                            </nav>



                            <div className='w-full md:h-125 h-192 overflow-y-auto p-4 flex flex-col  gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&:: webkit-scrollbar]:hidden'>

                                {hide && (<div className='w-full h-180 flex flex-col gap-1 items-center justify-center'>
                                    <div className='flex justify-center items-center w-full'>

                                        <h1 className='text-2xl md:text-3xl font-semibold'>hello i m <span className=' text-4xl md:text-5xl font-bold  bg-linear-to-r from-pink-600 via-purple-600 to-purple-600  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,100,50,0.2)] animate-text'>Sahil,Assistent!</span></h1>
                                    </div>

                                    <div>
                                        <p className='text-2xl md:text-3xl font-semibold'>how can i help you?</p>
                                    </div>

                                    <div className='flex flex-wrap w-full md:w-190 h-auto gap-6 mt-8 md:pl-22'>

                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <TbNotes
                                                    className='text-red-500 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>Summarize text</h1>
                                        </div>

                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <AiOutlineCode
                                                    className='text-purple-600 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>Code</h1>
                                        </div>

                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <RiPencilRulerLine
                                                    className='text-blue-600 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>Help me write</h1>
                                        </div>


                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <HiOutlineLightBulb
                                                    className='text-yellow-500 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>make a plane</h1>
                                        </div>

                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <PiGraduationCapFill
                                                    className='text-cyan-300 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>Get advice</h1>
                                        </div>

                                        <div className=' gap-2  bg-white/0 backdrop-invert backdrop-opacity-8 w-44 h-12 flex items-center justify-center rounded-4xl'>
                                            <div>
                                                <FiEye
                                                    className='text-emerald-500 text-2xl'
                                                />
                                            </div>
                                            <h1 className='text-gray-100'>Analyze</h1>
                                        </div>
                                    </div>

                                </div>)}


                                {chats.map((item, i) => (
                                    <div key={i} className='flex flex-col gap-4'>

                                        {/* 1. User Message (Prompt) - Right Side */}
                                        <div className='flex justify-end'>
                                            <div className='max-w-[80%] bg-purple-600 text-white p-3 rounded-t-2xl rounded-bl-2xl shadow-md'>
                                                <p className='text-sm font-medium'>{item.prompt}</p>
                                            </div>
                                        </div>


                                        {/* 2. Bot Message (Result) - Left Side */}
                                        <div className='flex justify-start'>
                                            <div className='max-w-[80%] bg-gray-700 text-gray-100 p-3 rounded-t-2xl rounded-br-2xl shadow-md border border-gray-600'>
                                                <p className='text-md leading-relaxed whitespace-pre-wrap'>{item.result}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                                {loading && (<ThreeDots
                                    height="50"
                                    width="50"
                                    radius="9"
                                    color="#4D2FB2"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{ margin: '20px' }}
                                    wrapperClass="custom-loader"
                                    visible={true}
                                />)}

                            </div>


                            <div className='w-full h-auto rounded-b-2xl  flex items-center justify-center md:mb-8   '>

                                <div className='w-12 md:h-14 h-19 text-3xl font-bold flex items-center justify-center rounded-tl-2xl md:rounded-l-4xl pl-4 bg-gray-900 text-white'>
                                    +
                                </div>
                                <input type="text"
                                    value={prompt}
                                    onChange={(e) => setprompt(e.target.value)}
                                    placeholder='Ask anything..'
                                    className='w-170 md:h-14 h-19 p-4 bg-gray-900 border-none outline-none text-white'
                                />
                                <div className='w-14 md:h-14 h-19 text-3xl font-bold flex items-center justify-center rounded-tr-2xl md:rounded-r-4xl pr-4  bg-gray-900 text-white'>
                                    <button
                                        onClick={handel}
                                        className='bg-white w-9  h-9 p-3 text-black rounded-full flex items-center justify-center'> <IoMdSend className='w-5 h-5' /></button>
                                </div>
                            </div>





                        </div>










                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home