import React from 'react';
import '../SharedPages/Style.css'
import Chicken1 from '../../assets/Images/Chicken Tikka Masala.jpg'
import Chicken2 from '../../assets/Images/Chicken Balti.jpg'
import Chicken3 from '../../assets/Images/Chicken Naga.jpg'
import Chicken4 from '../../assets/Images//Chicken Rogan Josh.jpg'

const PopularCourses = () => {
    return (
        <>
            <div className='container mx-auto bg_popularSection'>

                <div className='mt-[70px] border-b-[2px]  border-orange-600 rounded-[8px] lg:w-[500px] mx-auto'>
                    <p className='text-center text-[35px] font-semibold  '>Popular   <span className='text-orange-600'>main cource</span></p>
                    <p className='text-xl text-center text-amber-500 mb-[10px] mt-[15px] uppercase'>CHEF SELECTION</p>
                </div>
                <p className='mt-[20px] font-light w-[600px] text-center mx-auto'>Experience the culinary delights of our menu,crafted by our talented chefs using only the freshest and highest-quality ingredients, guaranteeing a satisfying and memorable meal.</p>





                <div className='mt-[100px] lg:flex gap-[30px] justify-center '>
                    {/* 1 */}
                    <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px]  w-[322px]  p-[20px]'>

                        <img src={Chicken1} className='rounded-[100%] mx-auto lg:w-[250px] lg:h-[250px]' alt="" />

                        <div className='flex justify-between items-center  mt-[30px] gap-5'>
                            <h1 className='text-lg font-semibold text-amber-200 '>Chicken Tikka </h1>
                            <p className='text-lg text-[#fa6e3a]'>£ 8.50</p>
                        </div>
                        <p className='text-[16px] mt-[10px] font-light'>Sweet & mild dish with coconut, mix almonds and a special masala sauces.</p>

                    </div>
                    {/* 2 */}
                    <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px]  w-[322px]  p-[20px]'>

                        <img src={Chicken2} className='rounded-[100%] mx-auto lg:w-[250px] lg:h-[250px] ' alt="" />

                        <div className='flex justify-between items-center mt-[20px] gap-6'>
                            <h1 className='text-[18px] text-amber-200 font-semibold '>Chicken Balti</h1>
                            <p className='text-lg text-[#fa6e3a]'>
                                £ 7.95</p>
                        </div>
                        <p className='text-[16px] mt-[10px] font-light'>Made from a special balti sauce prepared from the grinding some of indian most powerful spices to produce a mouth watering dish.</p>

                    </div>

                    {/* 3 */}
                    <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px]  w-[322px]  p-[20px]'>

                        <img src={Chicken3} className='rounded-[100%] mx-auto lg:w-[250px] lg:h-[250px] ' alt="" />

                        <div className='flex justify-between items-center mt-[30px] gap-6'>
                            <h1 className='text-[18px] font-semibold text-amber-200'>Chicken Naga</h1>
                            <p className='text-lg text-[#fa6e3a]'>£ 9.50</p>
                        </div>
                        <p className='text-[16px] mt-[10px] font-light'>Chicken with green & red peppers, onions & spices cooked with naga chilli sauce.</p>

                    </div>

                    <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px]  w-[322px]  p-[20px]'>

                        <img src={Chicken4} className='rounded-[100%] mx-auto lg:w-[250px] lg:h-[250px] ' alt="" />

                        <div className='flex justify-between items-center mt-[20px] gap-6'>
                            <h1 className='text-[18px] font-semibold text-amber-200'>Chicken Rogan </h1>
                            <p className='text-lg text-[#fa6e3a]'>£ 7.50</p>
                        </div>
                        <p className='text-[16px] mt-[10px] font-light'>Cooked with roasted green peppers, red peppers, lamaloes & coriander to create a medium and thick spicy dish.</p>

                    </div>


                </div>

            </div>

        </>
    );
};

export default PopularCourses;