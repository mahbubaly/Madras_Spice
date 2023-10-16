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

                <div className='fixed  z-50 flex justify-end items-end ml-[30px]  mt-[75%] lg:hidden'>


                    <div className=' flex gap-[4px] items-center '>
                        <a className='flex text-white items-center justify-center h-[50px] rounded-[50%] w-[50px] bg-black' href='tel:+44 161 973 3966'>  <IoIosCall className='text-amber-200   w-[24px] h-[24px]' /> </a>
                        <p className='bg-black p-[4px] rounded-[2px] text-amber-200  text-[14px]' >Call Now </p>
                    </div>

                </div>
                <Outlet />
                <Footer />

                <ScrollToTop
                    smooth
                    width='24px'
                    color='#fde68a'
                    className='flex justify-center items-center  '
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