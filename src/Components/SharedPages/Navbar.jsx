import React, { useState } from 'react';
import { FaBars, FaTimes, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../SharedPages/Style.css'


const Navbar = () => {

    const navbar = <>

        <Link to='/'     >


          


            <button class="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>HOME</span></button>


        </Link>

        <Link to='/menu'  >


          


            <button class="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>MENU</span></button>




        </Link>


        <Link to='/about'     >




            <button class="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>ABOUT US</span></button>


        </Link>

        <Link to='/contact'     >




            <button class="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>CONTACT</span></button>


        </Link>









    </>

    const [open, setOpen] = useState(false);
    return (
        <>

            <div className='container mx-auto  ' >
                <div className='flex justify-between'>
                    <div className='flex  mobile_gap   items-center'>
                        <div>
                            <Link className='text-[black] font-bold italic text-[18px] lg:text-[30px]  '>Madras <span className='text-white'>Spice</span></Link>
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

                        <div className={`block lg:hidden bg-white  lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500    lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-full  p-5" : "w-0"}`}>

                            <div className='flex  justify-between'>
                                <ul className='flex  flex-col  '>

                                    {navbar}



                                </ul>

                                <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-primary' />
                            </div>
                        </div>

                        <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-primary' />}</button>
                    </div>
                </div>


            </div>


        </>
    );
};

export default Navbar;