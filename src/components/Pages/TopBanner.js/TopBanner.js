import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'



const TopBanner = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const [hireBtn, setHireBtn] = useState(false)
    return (
       <div className="text-white flex flex-row justify-center itmes-center text-3xl" style={{backgroundImage: "url('https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/JavaScript-code.jpg?itok=1Wia7hH0')"}}>
           
           <div className="" >
           {
               hireBtn ? 
               <div className='p-40'><p className=""><u><a target="_blank" href="https://drive.google.com/file/d/1yGsYq_JW-vFVTHqk_HyYgStJOyhTC1X1/view?usp=sharing">Get Resume</a></u></p></div> : 
               <div data-aos="fade-left" className=' p-40'>
               <Typewriter className=''
                       onInit = { (typewriter) => {
                           typewriter
                           .typeString('Hi! This Is Sajib Hosen')
                           .pauseFor(1000)
                           .deleteAll()
                           .typeString('A Full-Stack Web Developer')
                           .pauseFor(1000)
                           .deleteAll()
                           .typeString('A Front-End Web Developer')
                           .pauseFor(1000)
                           .deleteAll()
                           .typeString('A Backend Web Developer')
                           .pauseFor(1000)
                           .deleteAll()
                           .typeString('React JS developer')
                           .pauseFor(1000)
                           .deleteAll()
                           .typeString('Want To Hire Me ?')
                           .pauseFor(1000)
                           .deleteAll()
                           .callFunction(() =>{
                               setHireBtn(true)
                           })
                           .start()
                       }}
               />
              </div>
           }
           </div>
          
       </div>
    );
};

export default TopBanner;