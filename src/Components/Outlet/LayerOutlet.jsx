import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';
import ScrollToTop from 'react-scroll-to-top';


const LayerOutlet = () => {
    return (
        <>

            <div className=' '>
                <Navbar />
                <Outlet />
                <Footer />

                <ScrollToTop
                smooth
                width='24px'
                color='#fde68a'
                className='flex justify-center items-center  '
                style={{ background: 'black',
                animation: ' 1.2 linear infinite alternate-reverse',
                
            
            }}

            ></ScrollToTop>




            </div>

          




        </>
    );
};

export default LayerOutlet;