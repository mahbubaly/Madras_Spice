import React, { useEffect, useRef, useState } from 'react';
import '../SharedPages/Style.css'
import { IoIosCall } from 'react-icons/io';
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import 'swiper/css/autoplay'



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';





const Banner = () => {
    


    return (
        <>
            <div className='bgBannerImg_1 z-10'>
                <div className='container mx-auto '>



                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper lg:mt-6"
                    >
                        <SwiperSlide>

                            <div className='flex  items-center banner_img rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>

                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>

                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu' > <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='flex  items-center banner_img2 rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>
                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>

                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu'> <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex  items-center banner_img3 rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>
                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>

                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu'> <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex  items-center banner_img4 rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>
                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>

                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu'> <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex  items-center banner_img5 rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>
                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>
                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu'> <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='rounded-[20px]'>
                            <div className='flex  items-center banner_img6 rounded-[30px] w-full'>
                                <div className='lg:px-[50px] px-5 my-[100px]'>
                                    <p className='text-[16px] font-medium text-white '>
                                        Little Test Big Testy
                                    </p>
                                    <h1 className='lg:text-[60px] text-[27px] lg:mt-[20px] mt-[10px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                        Indian Restaurant and Takeaway
                                    </h1>
                                    <p className='text-[16px] lg:text-lg my-5 lg:w-[500px] text-white'>
                                        Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                    </p>

                                    <Link onClick={() => {
                            window.scrollTo(0, 0);




                        }}  to='/menu'> <button className="custom-btn btn-7 w-[130px] h-[40px]"><span>CHECK MENU</span></button></Link>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>



                    <div className='mt-[100px] bg_imgCall  relative rounded-[10px] -top-[50px] lg:top-[90px] '>
                        <p className='p-5 lg:p-[50px] text-[20px] lg:text-[27px] font-semibold   text-white opacity-70 bg-black rounded-[10px] lg:text-white flex justify-center items-center gap-5'> <button className=''><IoIosCall className='w-[40px] relative  hover:-top-5 h-[40px]' /></button> Call Now On +44 161 973 3966 For Order Food or Book Table</p>




                    </div>



                </div>
            </div>




        </>
    );
};

export default Banner;