import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import myImg from './../../../images/profile_image-removebg-previewR.png'

const AboutMe = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])
    // data-aos="fade-left"
    return (
        <div className="w-4/5 mx-auto mt-5">
            <h1 className='text-3xl mb-4'>About Me</h1>

            <div className='border-2 flex' >

                <div className="w-2/5 border-2 mx-auto">
                    <img width='350px' src={myImg} alt='my image' />
                </div>

                <div className="w-3/5 border-2">
                    <p>this is text</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;