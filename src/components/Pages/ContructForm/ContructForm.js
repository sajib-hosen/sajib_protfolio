import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ContructForm = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])
    return (
        <div>
            <br /><br />
            <div  data-aos="fade-up" className='w-4/5 mx-auto'>
            <h2 className='text-center text-white pt-3 text-3xl font-bold'>Get in Touch</h2>
                <form className='flex flex-col p-10'>
                    <input className='my-2 p-2' type="text" name='name' placeholder="Enter Name" />
                    <input className='my-2 p-2' type="email" name='email' placeholder="Enter Email" />
                    <textarea className='my-2 p-2' name="message" id="message" cols="30" rows="5" placeholder='Message'></textarea>
                    <input className='p-2' type="submit" value="Send" />                
                </form>
            </div>
            
        </div>
    );
};

export default ContructForm;