import React from 'react';
import TandooriCurry from './TandooriCurry';
import BiryaniDishes from './BiryaniDishes';
import { Helmet } from 'react-helmet-async';

const FullMenu = () => {
    return (
        <>
            <Helmet>
                <title>Menu -Madras Spice</title>
            </Helmet>
            <div className='menuBg lg:h-[700px] '>

                <div className='flex justify-center  items-center lg:h-[700px] '>
                    <div data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-mirror="false"
                        data-aos-once="true" className='container  mx-auto   bg-gradient-to-r from-black p-5 lg:p-0 to-amber-300 lg:bg-none    lg:w-[500px] '>
                        <h1 className='text-center text-[28px]  lg:text-[45px] font-semibold text-white '>Menu</h1>
                        <p className='text-center  text-[18px] lg:text-[20px]  lg:pb-0 pb-5   text-white '>Experience the flavors of Madras at Madras Spice</p>


                    </div>

                </div>

            </div>






            <div className='MainMenu'>

                <h1 data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-mirror="false"
                    data-aos-once="true" className='lg:pt-[80px] pt-[50px] text-center text-[28px] lg:text-[45px]  font-semibold  text-white'>Tasty Menu Today</h1>

                <div className='container mx-auto pb-[50px]'>

                    {/* CONDIMENTS */}

                    <div className='mt-5 lg:mt-[50px] bg-black  text-amber-200  shadow-2xl rounded-[10px]
                     p-5 lg:p-[50px]'>
                        <h1 className='text-[25px] mx-auto lg:mx-0 font-medium mt-[20px] lg:mt-[50px] w-[170px] border-b-2  border-amber-200 '>CONDIMENTS</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
                            <div data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-mirror="false"
                                data-aos-once="true">
                                <div className='flex items-center justify-between'>
                                    <h1 className=' text-[16px] lg:text-[18px] flex items-center font-medium'>Plain Papadoms
                                    </h1>

                                    <p className='lg:block hidden text-gray-500 lg:ml-3 ml-2'>---------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 0.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 2 */}
                        <div className='mt-[30px]'>
                            <div data-aos="fade-right"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-mirror="false"
                                data-aos-once="true">
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Spicy Papadoms
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 0.70</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chutney Tray

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>  £ 2.10</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Onion/Mango/MInt/Red</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 0.50</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> LIme Pickle

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 0.60</p>
                                </div>


                            </div>
                        </div>








                    </div>



                    {/* STARTERS */}

                    <div className='mt-[50px] lg:mt-[100px] bg-black text-amber-200   shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>
                        <h1 data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='text-[25px] text-center lg:text-left font-medium mt-[20px] lg:mt-[50px] mx-auto lg:mx-0 w-[130px] lg:w-[120px] border-b-2 border-amber-200 '>STARTERS</h1>

                        {/* 1 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[50px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className=' text-[16px] lg:text-[18px] flex items-center font-medium'>Chicken Tikka
                                    </h1>

                                    <p className='lg:block hidden text-gray-500 lg:ml-3 ml-2'>---------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 2 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Tandoori Chicken
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>
                                        £ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Lamb Tikka

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Lamb Chops</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Garlic Chicken Tikka

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 6 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chicken Pakora

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 7 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chicken Chat

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Cheesy Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 9 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Sweet Chilli Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 10 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Shashlik Tikka Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 11 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Shashlik Tikka Lamb

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>----------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>
                        </div>



                        {/* 12 */}


                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Mix Kebab


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>

                            {/* 13 */}
                            <div className='mt-[30px]'>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Sheek Kebab

                                        </h1>

                                        <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                        <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                    </div>


                                </div>
                            </div>

                            {/* 14 */}
                            <div className='mt-[30px]'>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Shami Kebab

                                        </h1>

                                        <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                        <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                    </div>


                                </div>
                            </div>



                            {/* 15 */}
                            <div className='mt-[30px]'>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Meat Samosa


                                        </h1>

                                        <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                        <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>
                                            £ 2.95</p>
                                    </div>


                                </div>
                            </div>


                            {/* 16 */}
                            <div className='mt-[30px]'>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Rashmi Kebab

                                        </h1>

                                        <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                        <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                    </div>


                                </div>
                            </div>

                        </div>








                    </div>







                    {/* VEGETARIAN STARTERS */}

                    <div className='bg-black text-amber-200 mt-[50px] lg:mt-[100px]  shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>

                        <h1 data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='text-[25px] font-medium mt-[20px] lg:mt-[50px] lg:mx-0 mx-auto w-[290px] border-b-2 border-amber-200  '>VEGETARIAN STARTERS</h1>

                        {/* 1 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[50px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className=' text-[16px] lg:text-[18px] flex items-center font-medium'>Onion Bhaji
                                    </h1>

                                    <p className='lg:block hidden text-gray-500 lg:ml-3 ml-2'>---------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 2 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Veg Samosa
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Veg Pakora

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Garlic Mushroom</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Mulligatawny Soup
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 6 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Paneer Tikka

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 7 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Aloo Chat

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Veg Chat


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 9 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Sweet Chilli Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 10 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Cheesy Mashroom

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>










                    </div>





                    {/* SEAFOOD STARTERS */}

                    <div className='bg-black text-amber-200  mt-[50px] lg:mt-[100px]  shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>

                        <h1 data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='text-[25px] font-medium mt-[20px] lg:mt-[50px] lg:mx-0 mx-auto w-[250px] border-b-2 border-amber-200 '>SEAFOOD STARTERS</h1>

                        {/* 1 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[50px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className=' text-[16px] lg:text-[18px] flex items-center font-medium'>Fish Tikka

                                    </h1>

                                    <p className='lg:block hidden text-gray-500 lg:ml-3 ml-2'>---------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 2 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Fish Shashlik
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Tandoori King Prawn


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>King Prawn Puri</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Prawn Puri

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 3.50
                                    </p>
                                </div>


                            </div>
                        </div>

                        {/* 6 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> KIng Prawn Puri


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 7 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> KIng Prawn Butterfly


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true" className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Salmon Tikka


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>
                        </div>












                    </div>








                </div>
            </div>

            <TandooriCurry />


            <BiryaniDishes />

        </>
    );
};

export default FullMenu;