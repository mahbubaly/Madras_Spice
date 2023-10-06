import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';


const LayerOutlet = () => {
    return (
        <>

            <div className='bg-gradient-to-r from-[#FF78C4] to-fuchsia-500 '>
                <Navbar />
                <Outlet />
                <Footer />

            </div>





        </>
    );
};

export default LayerOutlet;