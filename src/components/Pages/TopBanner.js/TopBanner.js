import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { faReact, faNodeJs, faJs, faHtml5, faBootstrap, faCss3 } from '@fortawesome/free-brands-svg-icons';



const TopBanner = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000})
    } ,[])

    const react = <FontAwesomeIcon icon={faReact} />
    const nodeJs = <FontAwesomeIcon icon={faNodeJs} />
    const js = <FontAwesomeIcon icon={faJs} />
    const html = <FontAwesomeIcon icon={faHtml5} />
    const bootstrap = <FontAwesomeIcon icon={faBootstrap} />
    const css3 = <FontAwesomeIcon icon={faCss3} />

    const [hireBtn, setHireBtn] = useState(false)
    return (
       <div className="text-white py-32 flex justify-center items-center" style={{backgroundImage: "url('https://scx2.b-cdn.net/gfx/news/2019/galaxy.jpg')", backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
           
           <div className="font-roboto" > 
                <div className='flex flex-col p-4'>
                    <h1 className='text-4xl py-2'>Hi! This Is Sajib Hosen,</h1>
                   <div className='flex py-2'>
                       <p className='mx-2'>I'm a</p>
                       <div data-aos="fade-left" className=' font-roboto' >
                            <Typewriter className=''
                                onInit = { (typewriter) => {
                                    typewriter
                                    .typeString(' Fontend Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(' Backend Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(' JavaScript Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(' React.JS developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(' Full-Stack Web Developer')
                                    .pauseFor(1000)
                                    .callFunction(() =>{
                                        setHireBtn(true)
                                    })
                                    .start()
                                }}
                            />
                        </div>
                   </div>
                   <div>
                       <p className='flex flex-row py-2 '>
                           <span data-aos="fade-up"  data-aos-duration="1000" className='px-2 text-2xl'>{react}</span> 
                           <span data-aos="fade-up"  data-aos-duration="1500" className='px-2 text-2xl'>{nodeJs}</span> 
                           <span data-aos="fade-up"  data-aos-duration="2500" className='px-2 text-2xl'>{js}</span> 
                           <img data-aos="fade-up" data-aos-duration="3000" width='20px' src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"  alt="mongoDB" />  
                           <img data-aos="fade-up" data-aos-duration="3000" width='20px' src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png"  alt="firebase" />  
                           <span data-aos="fade-up" data-aos-duration="3000" className='px-2 text-white text-xl'>EX</span>
                           <span data-aos="fade-up" data-aos-duration="3000" className='px-2 text-2xl'>{html}</span>
                           <span data-aos="fade-up" data-aos-duration="3000" className='px-2 text-2xl'>{bootstrap}</span>
                           <span data-aos="fade-up" data-aos-duration="3000" className='px-2 text-2xl'>{css3}</span>
                           </p>
                   </div>
                   <div className='font-roboto'><button className='text-white border-2 px-2  hover:bg-indigo-600 rounded-full'><a target="_blank" href="https://drive.google.com/file/d/1yGsYq_JW-vFVTHqk_HyYgStJOyhTC1X1/view?usp=sharing">Get Resume</a></button></div>
                </div>               
           </div>
           
       </div>
    );
};

export default TopBanner;