import React from 'react';
import Navbar from '../SharedPages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer';


const LayerOutlet = () => {
    return (
        <>

            <div className=' '>
                <Navbar />
                <Outlet />
                <Footer />

            </div>





        </>
    );
};

export default LayerOutlet;