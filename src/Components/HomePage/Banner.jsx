import React, { useRef, useState } from 'react';
import '../SharedPages/Style.css'
import { IoIosCall } from 'react-icons/io';
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import 'swiper/css/autoplay'



import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const Banner = () => {


    return (
        <>
            <div className=' container mx-auto'>



                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay:2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className='flex  items-center banner_img rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>

                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='flex  items-center banner_img2 rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>
                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex  items-center banner_img3 rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>
                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex  items-center banner_img4 rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>
                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex  items-center banner_img5 rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>
                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='rounded-[20px]'>
                        <div className='flex  items-center banner_img6 rounded-[30px] w-full'>
                            <div className='lg:px-[50px] px-5 my-[100px]'>
                                <p className='text-[16px] font-medium text-white '>
                                    Little Test Big Testy
                                </p>
                                <h1 className='lg:text-[60px] text-[30px] mt-[20px] font-bold lg:leading-[70px] lg:w-[500px] text-white'>
                                    Indian Restaurant and Takeaway
                                </h1>
                                <p className='my-5 lg:w-[500px] text-white'>
                                    Authentic Indian flavors in the heart of Sale Moor, Manchester. Come dine with us at Madras Spice.
                                </p>

                                <button class="custom-btn btn-7"><span>CHECK MENU</span></button>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className='mt-[100px] '>
                    <p className='p-[50px] text-[30px] font-semibold rounded-[20px] bg-gradient-to-r from-sky-500 to-indigo-600 text-amber-200 flex justify-center items-center gap-5'> <IoIosCall className='w-[40px] h-[40px]' /> Call Now On +44 161 973 3966 For Order Food or Book Table</p>
                </div>


            </div>


        </>
    );
};

export default Banner;