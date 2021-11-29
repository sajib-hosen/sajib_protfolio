import React, { useEffect } from 'react';
import manApp from './../../../images/management-app.PNG'
import wooderFur from './../../../images/wooden-furniture.jpg'
import honda from './../../../images/honda.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const MyProjects = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])
    return (
        <div className='w-4/5 mx-auto mt-5'><br /><br />
            <h1 className='text-3xl mb-4 text-center text-white font-bold'>My Projects</h1>

            <div className='grid grid-cols-3 gap-3'>

                <div data-aos="fade-right" className=''>
                    <img  src={manApp} alt="management app" /><br/>
                    <a href="https://management-app-21.web.app/login" target='_blank' className='font-bold text-white'>Management App</a>
                    <div className='flex flex-wrap'>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>React JS</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Firebase</p> 
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Tailwindcss</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>React-router</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>AOS</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Express</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>MongoDB</p>
                    </div>
                </div>

                <div data-aos="fade-left" className=''>
                    <img  src={wooderFur} alt="wooden furniture" /><br/>
                    <a href="https://wooden-furniture-a.web.app/" target='_blank' className='font-bold text-white'>Wooden Furniture</a>
                    <div className='flex flex-wrap'>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>React JS</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Firebase</p> 
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Tailwindcss</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>React-router</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>Express</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>MongoDB</p>
                    </div>
                </div>

                <div data-aos="fade-up" className=''>
                    <img  src={honda} alt="Honda" /><br/>
                    <a href="https://sajib-hosen.github.io/honda/index.html" target='_blank' className='font-bold text-white'>Honda</a>
                    <div className='flex flex-wrap'>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>JavaScript</p>
                        <p className='text-white border-2 px-2 mx-2 rounded-full'>CSS</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;