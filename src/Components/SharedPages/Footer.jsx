import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            <div className='bgSimplySection  p-5 lg:py-[80px] '>
                <div className='container mx-auto bg-black opacity-90 rounded-[20px]  '>
                    <div data-aos="fade-left"

                        data-aos-delay="50"
                        data-aos-duration="1000"

                        data-aos-mirror="false"
                        data-aos-once="true" className='lg:w-[800px]  mx-auto p-5 lg:p-[50px]    '>
                        <p className='text-[16px] sm:text-[18px] text-center text-amber-200 lg:w-[350px] rounded-[10px] mx-auto  border-b-2'>SIMPLY BUT DELICIOUS EXPERIENCE</p>

                        <h1 className='lg:text-[40px]  text-[18px] font-semibold text-center opacity-100  mt-[20px] text-white   '>We Created Best Dinning Experience <span className='text-orange-600'> For You & Your Family</span></h1>
                    </div>


                    <div data-aos="fade-right"

                        data-aos-delay="50"
                        data-aos-duration="1000"

                        data-aos-mirror="false"
                        data-aos-once="true" className='mt-5 lg:mt-[50px] lg:flex gap-[100px]  justify-center  lg:pb-[50px]'>
                        <div className='lg:w-[400px] '>
                            <h1 className='text-[24px] font-semibold border-amber-300 text-amber-300 border-b-2 rounded w-[0px] hover:w-[70px] duration-1000'>Hours</h1>

                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Monday: </p>
                                <p className='text-[16px]  text-white'>	5.00 - 11.00</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Tuesday: </p>
                                <p className='text-[16px]  text-white'>Closed</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Wednesday: </p>
                                <p className='text-[16px]  text-white'>	5.00 - 11.00</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Thursday: </p>
                                <p className='text-[16px]  text-white'>	5.00 - 11.00</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Friday: </p>
                                <p className='text-[16px]  text-white'>	5.00 - 11.00</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Saturday: </p>
                                <p className='text-[16px]  text-white'>	5.00 - 11.00</p>
                            </div>
                            <div className='flex justify-between mt-[20px]'>
                                <p className='text-[16px]  text-white'>Sunday: </p>
                                <p className='text-[16px]  text-white'>	4.00 - 10.30</p>
                            </div>




                        </div>
                        <div className=' lg:pl-[80px] lg:pt-[50px] lg:border-s-2 border-amber-200 mt-[30px] lg:mt-0'>

                            <h1 className='text-[24px] font-semibold border-amber-300 text-amber-300 border-b-2 rounded w-[0px] hover:w-[100px] duration-1000'>Contact</h1>


                            <div className='mt-[20px]'>

                                <p className='text-[16px]  text-white lg:w-[400px] leading-[30px]'>ADDRESS : 180 Northenden Road, Sale, Cheshire, M33 2SR, United Kingdom </p>
                                <p className='text-[16px]  text-white my-[10px]'>Phone: +44 161 973 3966 </p>
                                <p className='text-[16px]  text-white'>	Email: contact@madrasspice.uk</p>
                            </div>






                        </div>
                    </div>

                </div>
            </div>

            <footer className='bg-black '>
                <div className='container mx-auto '>
                    <div className='py-[10px] lg:flex justify-between items-center'>
                        <div className='flex justify-center gap-5 '>
                            <Link to=''>  <BsFacebook className=' w-[24px] h-[24px]' /></Link>
                            <Link to=''>  <BsInstagram className=' w-[24px] h-[24px]' /></Link>

                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[16px] my-[10px] text-center lg:text-left lg:my-0'>Developed By | <Link to='https://www.linkedin.com/in/md-mahbubur-rahman-mahbub-2a3a7b248/'> Mahbubur Rahman  <br />Contact: +8801714-227495 </Link>
                                {/* <p>B.sc in Computer science Engineering</p>
                            <p>Call: 01714227495</p> */}

                            </p>
                        </div>
                        <div>
                            <p className='text-[14px] lg:text-[16px] text-center lg:text-left' >© 2023 Madras Spice. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;