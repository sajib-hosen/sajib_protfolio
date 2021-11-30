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
            <h1 className='text-3xl mb-4 text-center text-white font-bold'>My <span className='text-yellow-600'>Projects</span></h1>

            <div className=''>

                {/* management app ------------------------------------- */}
                <div className=' flex'>
                    <div data-aos="fade-right" className='w-2/5 border'>
                        <img  src={manApp} alt="management app" />
                    </div>
                    <div data-aos="fade-up" className='w-3/5 text-white px-4'>
                        <h1 className='text-2xl text-white'>Management App</h1>
                        <p>
                            < ul className='list-disc list-inside'>
                                <li>This web site help you to manage your business with some necessary tools, like: accountin, creating invoice and PO, inventory management, etc </li>
                                <li>This site let you open an business account as well as add employee</li>
                                <li>This site let you create invoice/PO</li>
                            </ul>
                        </p> <br/>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500'><a href='https://management-app-21.web.app/' target="_blank">Visite Site</a></button>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500 mx-2'><a href='https://management-app-21.web.app/' target="_blank">Details</a></button>
                    </div>
                </div> <br/><br/>

                {/* Wooden Furniture ------------------------------------- */}
                <div className=' flex'>
                    <div data-aos="fade-right" className='w-2/5 border'>
                        <img  src={wooderFur} alt="Wooden Furniture" />
                    </div>
                    <div data-aos="fade-up" className='w-3/5 text-white px-4'>
                        <h1 className='text-2xl text-white'>Wooden Furniture</h1>
                        <p>
                            < ul className='list-disc list-inside'>
                                <li>You can add product to the web site to sell</li>
                                <li>Manage all orders you get from your customers</li>
                                <li>Admin of the web site can delet any product added by any one</li>
                            </ul>
                        </p> <br/>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500'><a href='https://wooden-furniture-a.web.app/' target="_blank">Visite Site</a></button>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500 mx-2'><a href='https://wooden-furniture-a.web.app/' target="_blank">Details</a></button>
                    </div>
                </div> <br/><br/>

                {/* Honda ------------------------------------- */}
                <div className=' flex'>
                    <div data-aos="fade-right" className='w-2/5 border'>
                        <img  src={honda} alt="Honda" />
                    </div>
                    <div data-aos="fade-up" className='w-3/5 text-white px-4'>
                        <h1 className='text-2xl text-white'>Honda</h1>
                        <p>
                            < ul className='list-disc list-inside'>
                                <li>This site tells about diffrent type of Motor-cycle</li>
                                <li>This site is kind of advertisement </li>
                                <li>Admin of the web site can delet any product added by any one</li>
                            </ul>
                        </p> <br/>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500'><a href='https://sajib-hosen.github.io/honda/index.html' target="_blank">Visite Site</a></button>
                        <button className='border-2 px-4 rounded-full hover:bg-indigo-500 mx-2'><a href='https://sajib-hosen.github.io/honda/index.html' target="_blank">Details</a></button>
                    </div>
                </div> <br/>
            </div>
        </div>
    );
};

export default MyProjects;