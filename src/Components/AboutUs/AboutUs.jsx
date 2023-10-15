import React from 'react';
import Shashlik from '../../assets/Images/Shashlik Korahi.jpg'
import { CiDeliveryTruck } from 'react-icons/ci';
import { LuChefHat } from 'react-icons/lu';
import { PiHamburgerLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About-us -Madras Spice</title>
            </Helmet>
            <div>
                <div className='aboutUsBG lg:h-[700px] '>

                    <div className='lg:bg-none   bg-gradient-to-r from-black p-5 lg:p-0 to-pink-500
                      lg:h-[700px]  lg:opacity-100 '>
                        <div data-aos="fade-left"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true" className='container  mx-auto lg:border-b-2 border-white lg:w-[500px] rounded-[10px]'>
                            <h1 className='text-center  text-[28px] lg:text-[45px] font-semibold text-white lg:mt-[200px]'>
                                ABOUT US</h1>
                            <p className='text-center font-light text-white '>Experience the flavors of Madras at Madras Spice</p>


                        </div>
                    </div>


                </div>

            </div>

            <div className='choiceUs'>
                <div className='container mx-auto'>
                    <div className='lg:flex justify-center mt-[50px] gap-[60px] items-center'>

                        <img data-aos="fade-right"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true" src={Shashlik} alt="" className='lg:w-[400px] rounded-[10px]' />



                        <div data-aos="fade-left"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true" className='lg:w-[500px] mt-[50px] lg:mt-0 text-white'>
                            <h1 className='lg:text-[45px] text-[28px] font-semibold '><span className='text-yellow-300'> We Are Specialized </span>In Spicy Indian Food</h1>
                            <p className='text-lg font-medium text-yellow-300 mt-[10px]'>WELLCOM TO OUR RESTAURANT</p>

                            <p className='mt-[20px]'>Experience the flavors of Madras at Madras Spice, located in Sale Moor, Manchester. Our menu features a wide variety of authentic dishes made with fresh ingredients and bold spices. Our friendly staff will ensure you have a memorable dining experience. Stop by for lunch or dinner. We can't wait to see you at Madras Spice!</p>


                        </div>
                    </div>



                    <div className='mt-[50px] lg:mt-[100px] text-white'>
                        <h1 data-aos="fade-down"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true"
                            className='lg:text-[45px] text-[28px] font-semibold text-center text-yellow-300'>WHY CHOOSE US</h1>
                        <p data-aos="fade-up"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true" className='text-lg font-medium text-center '>SOME OF OUR FEATURE</p>


                        <div data-aos="fade-left"

                            data-aos-delay="50"
                            data-aos-duration="1000"

                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[50px] lg:mt-[100px] lg:flex gap-[30px] justify-center lg:pb-[50px]'>

                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                                <CiDeliveryTruck className='text-amber-700 w-[100px] h-[100px] ' />

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>FREE DELIVERY</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Free home delivery on orders over £15 within 3 mile radius. £2 delivery charge per mile for order less than £15 & over 3 mile.</p>

                            </div>



                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  my-[30px] lg:my-0 p-[30px]'>

                                <LuChefHat className='text-amber-700 w-[80px] h-[80px] ' />

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>EXPERT CHEF</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Expert chefs craft delicious, innovative dishes. Passionate, dedicated to providing an unforgettable culinary experience.</p>

                            </div>


                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                                <PiHamburgerLight className='text-amber-700 w-[70px] h-[70px] ' />

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>AWESOME RECIPE</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Our authentic Indian dishes, crafted with traditional spices and techniques. A true taste of India, guaranteed to delight your palate.</p>

                            </div>
                        </div>
                    </div>









                </div>

            </div>



            {/* OUR EXPERT CHEFS */}

            <div className='aboutChef lg:h-[800px] '>
                <div className='container mx-auto  lg:h-[300px] '>
                    <div  className='lg:p-[30px] p-5 lg:w-[700px] bg-black rounded-[8px] opacity-80 lg:my-0 my-[50px] lg:mt-[200px]  mx-auto'>
                        <h2 className='lg:text-[35px] text-[24px] text-center font-semibold text-orange-400 mt-[10px]'>OUR EXPERT CHEFS</h2>
                        <p className='text-yellow-400 text-center text-[24px] font-semibold'>PROFESSIONAL COOK</p>
                        <p className='text-white mt-[10px] text-[16px] text-center'>Our expert chefs have years of experience in crafting delicious and innovative dishes. They are passionate about food and dedicated to providing you with an unforgettable dining experience.</p>


                        <div className=' flex justify-center items-center mt-[50px]'>
                            <Link to='/menu' onClick={() => {
                                window.scrollTo(0, 0);




                            }} >  <button className="custom-btn btn-14 font-semibold  text-[20px] w-[200px] h-[50px] ">View our menu</button></Link>
                        </div>
                    </div>
















                </div>

            </div>


            <div className='resView lg:h-[700px] '>

                <div className='bg-black container mx-auto  opacity-60 lg:h-[700px] flex justify-center items-center'>
                    <div  className='lg:py-0 py-5'>
                        <h1 className='text-yellow-400 text-center font-semibold text-lg lg:text-[24px] '>RESTAURANT FANATICS</h1>

                        <p className='lg:text-[45px] text-[28px] font-semibold lg:w-[700px] mt-[10px] lg:mt-[20px] text-center mx-auto text-white'>It's The Restaurant You'Ve  <span className='text-amber-300'>Always Dreamed Of</span></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;