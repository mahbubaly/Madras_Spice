import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { BiTime } from 'react-icons/bi';
import { Helmet } from 'react-helmet-async';



const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact -Madras Spice</title>
            </Helmet>
            <div className='contactPage lg:h-[700px]'>

                <div className='container   mx-auto '>
                    <div className='mx-auto lg:border-b-2 border-black lg:w-[500px] rounded-[10px]' data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className='py-5 lg:py-0' >
                            <h1 className='text-center text-[28px] lg:text-[45px] font-semibold text-white lg:text-black lg:mt-[200px]'>CONTACT US</h1>
                            <p className='lg:text-center font-light text-white lg:text-black text-center '>Experience the flavors of Madras at Madras Spice</p>
                        </div>
                    </div>


                </div>


            </div>

            <div className='map '>
                <div className='  container mx-auto'>
                    <h1 data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true" className='lg:text-[45px] text-[28px] mt-[20px] lg:mt-[70px] font-semibold text-center'>
                        Please Get In Touch
                    </h1>

                    <p data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true" className='text-lg text-amber-200 text-center'>SEND US A MASSEGE</p>


                    <form data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true"
                        className='lg:w-[700px] mx-auto mt-[20px]'>
                        <div className='  '>
                            <p className='text-lg font-medium text-amber-200'>Name<span className='text-[#fa6e3a]'>*</span></p>
                            <input type="text" placeholder='Enter your name' className='border-[2px] w-full rounded-[4px] h-[48px] px-3 mt-[10px] ' name="" id="" />
                        </div>
                        <div className=' my-[20px] '>
                            <p className='text-lg font-medium text-amber-200'>Email<span className='text-[#fa6e3a]'>*</span></p>
                            <input type="email" placeholder='Enter your email' className='border-[2px] w-full rounded-[4px] h-[48px] px-3 mt-[10px] ' name="" id="" />
                        </div>
                        <div className='  '>
                            <p className='text-lg font-medium text-amber-200'>Subject<span className='text-[#fa6e3a]'>*</span></p>
                            <input type="text" placeholder='Write Subject' className='border-[2px] w-full rounded-[4px] h-[48px] px-3 mt-[10px] ' name="" id="" />
                        </div>

                        <div className=' mt-[20px] '>
                            <p className='text-lg font-medium text-amber-200'>Your message <span className='text-white'>(optional)</span></p>
                            <textarea type="text" placeholder='Write Subject' className='border-[2px] h-[80px] w-full rounded-[4px] px-3 pt-[10px] mt-[10px]' name="" id="" />
                        </div>

                        <div data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='  mt-[50px]'>
                            <a type='submit' href='#' className="custom-btn flex justify-center btn-14 font-semibold  text-[20px] lg:w-[130px] w-full text-center h-[48px] lg:h-[50px] ">Submit</a>

                        </div>
                    </form>


                    <div data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true" className='mt-[50px] rounded-[10px]'>
                        <iframe className='rounded-[10px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.7220797204736!2d-2.305140924234612!3d53.419796369226496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badaeff761431%3A0x9f5e746053930ffb!2sMadras%20Spice%20Sale%20moor!5e0!3m2!1sen!2sbd!4v1697007097887!5m2!1sen!2sbd" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>






                    <div data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true" className='mt-[100px] pb-[50px] lg:flex gap-[30px] justify-center '>
                        <div className='bg-black flex items-center text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                            <div className='flex gap-[10px] '>
                                <MdLocationPin className='w-[80px] h-[50px] text-[#fa6e3a]' />
                                <div>
                                    <h1 className='text-[20px] font-semibold '>ADDRESS :</h1>
                                    <p>180 Northenden Road, Sale,
                                        Cheshire, M33 2SR, United Kingdom</p>
                                </div>
                            </div>



                        </div>

                        <div className='bg-black my-5 lg:my-0 text-white flex items-center  shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                            <div className='flex gap-[10px] items-center  '>
                                <HiMiniDevicePhoneMobile className='w-[80px] h-[100px] text-[#fa6e3a]' />
                                <div className=''>
                                    <h1 className='text-[20px] font-semibold '>Phone: </h1>
                                    <p className='text-[16px]'> +44 161 973 3966</p>
                                </div>
                            </div>



                        </div>

                        <div className='bg-black text-white  shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                            <h1 className='text-[20px] font-semibold text-center'>WORKING</h1>

                            <div className='flex gap-[20px]  mt-5 '>
                                <BiTime className='w-[50px] h-[50px] text-[#fa6e3a]' />

                                <div>
                                    <div className='flex justify-between gap-5 w-[220px] items-center'>
                                        <h1 className='text-[16px]  lg:text-[18px] '> Mon: </h1>
                                        <p className='text-[16px]'> 	5.00 - 11.00</p>
                                    </div>
                                    <div className='flex justify-between gap-5 w-[220px] items-center'>
                                        <h1 className='text-[16px]  lg:text-[18px] '> Tue: </h1>
                                        <p className='text-[16px]'>Closed</p>
                                    </div>
                                    <div className='flex justify-between gap-4 w-[220px] items-center'>
                                        <h1 className='text-[16px]  lg:text-[18px] '> Wed - Thu: </h1>
                                        <p className='text-[16px]'>5.00 - 11.00</p>
                                    </div>
                                    <div className='flex justify-between gap-5 w-[220px] items-center'>
                                        <h1 className='text-[16px]  lg:text-[18px]  '> Fri - Sat: </h1>
                                        <p className='text-[16px]'>5.00 - 12.00</p>
                                    </div>
                                    <div className='flex justify-between gap-5 w-[220px] items-center'>
                                        <h1 className='text-[16px]  lg:text-[18px] '> Sun: </h1>
                                        <p className='text-[16px]'>4.00 - 10.30
                                        </p>
                                    </div>

                                </div>
                            </div>



                        </div>




                    </div>



                </div>
            </div>

        </>
    );
};

export default Contact;