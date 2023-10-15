import React, { useState } from 'react';
import { FaBars, FaTimes, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../SharedPages/Style.css'
import Headroom from 'react-headroom';


const Navbar = () => {

    const navbar = <>

        <Link to='/' className='mt-5 lg:mt-0' onClick={() => setOpen(!open)} >





            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>HOME</span></button>


        </Link>

        <Link to='/menu' className='my-5 lg:my-0' onClick={() => setOpen(!open)} >





            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>MENU</span></button>




        </Link>


        <Link to='/about-us'   onClick={() => setOpen(!open)}  >




            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>ABOUT US</span></button>


        </Link>

        <Link to='/contact' className='my-5 lg:my-0' onClick={() => setOpen(!open)} >




            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>CONTACT</span></button>


        </Link>









    </>

    const [open, setOpen] = useState(false);
    return (
        <>

          
                <div className='bgBannerImg_1'>
                    <div className='container mx-auto   ' >
                        <div className='flex justify-between mt-[10px]'>
                            <div className='flex  mobile_gap   items-center'>
                                <div>
                                    <Link className='text-[black] font-bold  text-[18px] lg:text-[30px]  '>Madras <span className='text-white'>Spice</span></Link>
                                    <p className='text-[14px] font-light sm:block hidden'> Experience the flavors of Madras at Madras Spice</p>
                                </div>



                            </div>
                            <div className="flex items-center gap-4">



                                <div className="hidden lg:block">
                                    <nav aria-label="">
                                        <ul className="flex items-center gap-[36px] text-sm">
                                            {navbar}
                                        </ul>
                                    </nav>
                                </div>









                                {/* Mobile */}

                                <div className={`block lg:hidden  bgBannerImg_1 lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500 lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-[85%]  p-5" : "w-0"}`}>

                                    <div className='flex  justify-between'>
                                        <ul className='flex  flex-col pl-[30px] pt-[20px] '>

                                            {navbar}



                                        </ul>

                                        <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-amber-200' />
                                    </div>
                                </div>

                                

                                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-amber-200' />}</button>
                            </div>
                        </div>


                    </div>


                </div>
           


        </>
    );
};

export default Navbar;