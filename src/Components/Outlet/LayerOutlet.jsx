import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { IoIosCall } from 'react-icons/io';



const LayerOutlet = () => {
    return (
        <>

            <div className=' '>

                <Navbar />

                <div className='fixed  z-50 flex justify-end items-end ml-[40px]  bottom-[30px] lg:hidden'>


                    <div className=' flex gap-[4px] items-center '>
                        <a className='flex items-center justify-center h-[50px] rounded-[50%] w-[50px] bg-black hover:bg-amber-400 hover:text-white text-amber-200 ' href='tel:+44 161 973 3966'>  <IoIosCall className='   w-[24px] h-[24px]' /> </a>
                        <a href='tel:+44 161 973 3966' className='bg-black p-[4px] rounded-[2px] text-amber-200  text-[16px]' >Call Now </a>
                    </div>

                </div>
                <Outlet />
                <Footer />

                <ScrollToTop
                    smooth
                    width='24px'
                    color='#fde68a'
                   
                    className='flex justify-center  items-center  '
                    style={{
                        background: 'black',
                        animation: ' 1.2 linear infinite alternate-reverse',
                        
                   


                    }}

                ></ScrollToTop>




            </div>






        </>
    );
};

export default LayerOutlet;