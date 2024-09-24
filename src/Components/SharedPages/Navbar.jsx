import React, { useState } from 'react';
import { FaBars, FaCross, FaShoppingCart, FaTimes, } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../SharedPages/Style.css'
import { Badge, Box, Modal, Typography } from '@mui/material';
import cartImg from '../../assets/Images/chrismas.jpg'
import cartImg2 from '../../assets/Images/offer2.jpg'




const style = {
    position: 'absolute',
    top: '50%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 2,

    '@media (min-width: 320px)': {
        width: 200, // Adjust width for small tablets

    },
    '@media (min-width: 720px)': {
        width: 400, // Adjust width for small tablets

    },
};

const Navbar = () => {



    const [openTwo, setOpenTwo] = useState(true);
    const handleOpen = () => setOpenTwo(false);

    const handleCloseTwo = () => setOpenTwo(false);


    const navbar = <>

        <Link to='/' className='mt-5 lg:mt-0' onClick={() => setOpen(!open)} >


            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>HOME</span></button>


        </Link>

        <Link to='/menu' className='my-5 lg:my-0' onClick={() => setOpen(!open)} >





            <button className="custom-btn btn-12 text-[16px] font-medium text-[#002626] py-[14px] px-[14px]"><span>Click!</span><span>MENU</span></button>




        </Link>


        <Link to='/about-us' onClick={() => setOpen(!open)}  >




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

                            {/* //For pop up function which show occasional things: */}
                            <Badge
                                onClick={handleOpen}
                            >

                            </Badge>



                            <Modal
                                onClick={handleCloseTwo}
                                open={openTwo}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>

                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div onClick={handleCloseTwo} className='flex justify-end absolute md:-top-[15px] md:-right-[105%]'>

                                            <MdCancel className='text-[32px] text-[white] relative -top-2 md:-top-[10px]' />

                                        </div>



                                    </Typography>
                                    <Typography id="modal-modal-description" className='mt-2'>
                                        <div className='md:flex mx-auto'>
                                            <img src={cartImg} />
                                            <img src={cartImg2} />
                                        </div>

                                    </Typography>
                                </Box>
                            </Modal>









                            {/* Mobile */}

                            <div className={`block lg:hidden  bgBannerImg_1 lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500 lg:bg-[transparent] lg:p-0 z-30 ${open ? "w-[85%]  p-5" : "w-0"}`}>

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