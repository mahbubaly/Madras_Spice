import React from 'react';
import Shashlik from '../../assets/Images/Shashlik Korahi.jpg'
import { CiDeliveryTruck } from 'react-icons/ci';
import { LuChefHat } from 'react-icons/lu';
import { PiHamburgerLight } from 'react-icons/pi';


const AboutUs = () => {
    return (
        <>
            <div>
                <div className='aboutUsBG lg:h-[700px] '>

                    <div className='bg-black lg:h-[700px] opacity-50'>
                        <div className='container  mx-auto border-b-2 border-white lg:w-[500px] rounded-[10px]'>
                            <h1 className='text-center opacity-100 text-[45px] font-semibold text-white lg:mt-[200px]'>
                                ABOUT US</h1>
                            <p className='lg:text-center font-light text-white '>Experience the flavors of Madras at Madras Spice</p>


                        </div>
                    </div>


                </div>

            </div>

            <div className='choiceUs'>
                <div className='container mx-auto'>
                    <div className='lg:flex justify-center mt-[50px] gap-[60px] items-center'>

                        <img src={Shashlik} alt="" className='lg:w-[400px] rounded-[10px]' />



                        <div className='lg:w-[500px] text-white'>
                            <h1 className='text-[35px] font-semibold '>We Are Specialized In Spicy Indian Food</h1>
                            <p className='text-lg font-medium text-[#fa6e3a] mt-[10px]'>WELLCOM TO OUR RESTAURANT</p>

                            <p className='mt-[20px]'>Experience the flavors of Madras at Madras Spice, located in Sale Moor, Manchester. Our menu features a wide variety of authentic dishes made with fresh ingredients and bold spices. Our friendly staff will ensure you have a memorable dining experience. Stop by for lunch or dinner. We can't wait to see you at Madras Spice!</p>


                        </div>
                    </div>



                    <div className='mt-[50px] text-white'>
                        <h1 className='text-[35px] font-semibold text-center'>WHY CHOOSE US</h1>
                        <p className='text-lg font-medium text-center '>SOME OF OUR FEATURE</p>


                        <div className='mt-[100px] lg:flex gap-[30px] justify-center '>

                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                                <CiDeliveryTruck className='text-amber-700 w-[100px] h-[100px] ' />

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>FREE DELIVERY</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Free home delivery on orders over £15 within 3 mile radius. £2 delivery charge per mile for order less than £15 & over 3 mile.</p>

                            </div>



                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  my-[30px] lg:my-0 p-[30px]'>

                                <LuChefHat  className='text-amber-700 w-[80px] h-[80px] '/>

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>EXPERT CHEF</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Expert chefs craft delicious, innovative dishes. Passionate, dedicated to providing an unforgettable culinary experience.</p>

                            </div>


                            <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                                <PiHamburgerLight className='text-amber-700 w-[70px] h-[70px] '/>

                                <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>AWESOME RECIPE</h1>
                                <p className='text-[16px] mt-[10px] font-light'>Our authentic Indian dishes, crafted with traditional spices and techniques. A true taste of India, guaranteed to delight your palate.</p>

                            </div>
                        </div>
                    </div>





                </div>

            </div>

        </>
    );
};

export default AboutUs;