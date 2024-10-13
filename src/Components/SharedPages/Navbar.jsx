import React, { useState } from 'react';
import { FaBars, FaTimes, } from 'react-icons/fa';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../SharedPages/Style.css'
import { Badge, Box, Modal, Typography } from '@mui/material';
import cartImg from '../../assets/Images/1.png'
import cartImg2 from '../../assets/Images/2.png'
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const style = {
    position: 'absolute',

    '@media (min-width: 320px)': {
        width: '320px',

        top: '0%',
        left: '0%',
    },


    '@media (min-width: 375px)': {
        width: '375px',


        top: '0%',
        left: '0%',
    },

    // Medium mobile (425px)
    '@media (min-width: 425px)': {
        width: '425px',
        top: '0%',
        left: '0%',
    },

    // Small tablets (640px)
    '@media (min-width: 640px)': {
        width: 400,
        top: '50%',
        left: '35%',
    },

    // Tablets (768px)
    '@media (min-width: 768px)': {
        top: '55%',
        left: '33%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2px',
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

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
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
                            <Badge className=""
                                onClick={handleOpen}
                            >

                            </Badge>



                            <Modal
                                className=' '

                                open={openTwo}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style} className='mt-[25px] sm:mt-0' >

                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div onClick={handleCloseTwo} className='flex justify-end absolute top-[5px] z-40 right-0 md:-top-[15px]  md:-right-[105%]'>

                                            <MdCancel className='text-[32px] text-[white] relative -top-2 md:-top-[10px]' />

                                        </div>



                                    </Typography>
                                    <Typography id="modal-modal-description" className='mt-2 '>
                                        <div className='md:flex hidden mx-auto'>
                                            <img src={cartImg} />
                                            <img src={cartImg2} />
                                        </div>

                                    </Typography>

                                    <div className='md:hidden block'>
                                        <Typography className=''>
                                            <Swiper
                                                pagination={pagination}
                                                modules={[Pagination]}
                                                className="mySwiper "
                                            >
                                                <SwiperSlide>    <img src={cartImg} className='cartImage1' /></SwiperSlide>
                                                <SwiperSlide>    <img src={cartImg2} className='cartImage2 ' /></SwiperSlide>

                                            </Swiper>
                                        </Typography>
                                    </div>
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