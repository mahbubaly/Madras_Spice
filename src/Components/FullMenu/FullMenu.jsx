import React from 'react';
import TandooriCurry from './TandooriCurry';
import BiryaniDishes from './BiryaniDishes';

const FullMenu = () => {
    return (
        <>
            <div className='menuBg lg:h-[700px]'>

                <div className='container  mx-auto border-b-2 lg:w-[500px] rounded-[10px]'>
                    <h1 className='text-center text-[45px] font-semibold text-white lg:mt-[200px]'>Menu</h1>
                    <p className='lg:text-center font-light text-white '>Experience the flavors of Madras at Madras Spice</p>


                </div>


            </div>






            <div className='MainMenu'>

                <h1 className='pt-[80px] text-center text-[30px] lg:text-[45px]  font-semibold  text-white'>Tasty Menu Today</h1>

                <div className='container mx-auto pb-[50px]'>

                    {/* CONDIMENTS */}

                    <div className='bg-black  text-amber-200 mt-[50px] shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>
                        <h1 className='text-[25px] font-medium mt-[50px] lg:w-[170px] border-b-2 border-amber-200 '>CONDIMENTS</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
                            <div >
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
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Spicy Papadoms
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 0.70</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chutney Tray

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>  £ 2.10</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Onion/Mango/MInt/Red</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 0.50</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> LIme Pickle

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 0.60</p>
                                </div>


                            </div>
                        </div>








                    </div>



                    {/* STARTERS */}

                    <div className='bg-black text-amber-200 mt-[100px]  shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>
                        <h1 className='text-[25px] font-medium mt-[50px] lg:w-[120px] border-b-2 border-amber-200 '>STARTERS</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
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
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Tandoori Chicken
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>
                                        £ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 3 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Lamb Tikka

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 4 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Lamb Chops</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Garlic Chicken Tikka

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 6 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chicken Pakora

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 7 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Chicken Chat

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Cheesy Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 9 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Sweet Chilli Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 10 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Shashlik Tikka Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 11 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Shashlik Tikka Lamb

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>----------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>
                        </div>



                        {/* 12 */}


                        <div className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Mix Kebab


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
                                </div>


                            </div>

                            {/* 13 */}
                            <div className='mt-[30px]'>
                                <div >
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Sheek Kebab

                                        </h1>

                                        <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                        <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
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


                                        <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
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


                                        <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>
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


                                        <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                    </div>


                                </div>
                            </div>

                        </div>








                    </div>







                    {/* VEGETARIAN STARTERS */}

                    <div className='bg-black text-amber-200 mt-[100px]  shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>

                        <h1 className='text-[25px] font-medium mt-[50px] lg:w-[290px] border-b-2 border-amber-200 '>VEGETARIAN STARTERS</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>Garlic Mushroom</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Aloo Chat

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Veg Chat


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 2.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 9 */}
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Sweet Chilli Chicken

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.95</p>
                                </div>


                            </div>
                        </div>

                        {/* 10 */}
                        <div className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Cheesy Mashroom

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 3.50</p>
                                </div>


                            </div>
                        </div>










                    </div>





                    {/* SEAFOOD STARTERS */}

                    <div className='bg-black text-amber-200 mt-[100px]  shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>

                        <h1 className='text-[25px] font-medium mt-[50px] lg:w-[250px] border-b-2 border-amber-200 '>SEAFOOD STARTERS</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'>King Prawn Puri</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[16px]  lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>

                            </div>
                        </div>

                        {/* 5 */}
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
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
                        <div className='mt-[30px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> KIng Prawn Butterfly


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.50</p>
                                </div>


                            </div>
                        </div>

                        {/* 8 */}
                        <div className='mt-[30px] pb-[20px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[16px] lg:text-[18px] flex items-center font-medium'> Salmon Tikka


                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 4.95</p>
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