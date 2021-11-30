import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import myImg from './../../../images/profile_image-removebg-previewR.png'

const AboutMe = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    return (
        <div className="w-4/5 mx-auto mt-5">
            <br /><br />
            <h1 className='text-3xl mb-4 text-center text-white '>About Me</h1>

            <div className='flex items-center' >
                <div data-aos="fade-left" className="w-2/5 mx-auto">
                    <img width='350px' src={myImg} alt='my image' />
                </div>
                <div  data-aos="fade-up" className="w-3/5">
                    <h1 className='text-4xl text-white font-bold'>Hi, I'm <span className='text-yellow-300'>Sajib Hosen</span></h1> <br />
                    <p className='text-white'>I'm a Bangladesh based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
                    <br />
                    <button className='hover:bg-indigo-600 rounded-full text-white border-2 px-2'><a target="_blank" href="https://drive.google.com/file/d/1yGsYq_JW-vFVTHqk_HyYgStJOyhTC1X1/view?usp=sharing">Resume</a></button>
                    <button className='hover:bg-indigo-600 rounded-full px-3 border-2 mx-2 text-white'>Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;