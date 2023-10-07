import React from 'react';
import food1 from '../../assets/Images/Balti Eotica.jpeg'
import food2 from '../../assets/Images/Shashlik Korahi.jpg'
import food3 from '../../assets/Images/Hyderabadi Ghost.jpg'
import indian1 from '../../assets/Images/indian cook1.jpg'
import indian2 from '../../assets/Images/indian3.jpg'
import indian3 from '../../assets/Images/inidan 2.jpg'
import '../SharedPages/Style.css'
import { Link } from 'react-router-dom';

const Menus = () => {
    return (
        <>
            <div className='PerfectImgBanner_2'>
                <div className='container mx-auto '>

                    <div className='mt-[70px] border-b-[2px] rounded-[10px] lg:w-[500px] mx-auto'>
                        <p className='text-center text-[35px] font-semibold  '>The Perfect  <span className='text-white'>Offer For You</span></p>
                        <p className='text-xl text-center text-amber-200 mb-[10px] mt-[15px] uppercase'>FROM OUR MASTER CHEF</p>
                    </div>



                    <div className='mt-[100px] lg:flex gap-[30px] justify-center '>
                        <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                            <img src={food1} className='rounded-[50%] mx-auto lg:w-[250px] lg:h-[250px]' alt="" />

                            <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>Balti Eotica</h1>
                            <p className='text-[16px] mt-[10px] font-light'>Cooked with tandoori chicken, lamb tikka, chicken tikka & king prawn, medium spiced balti sauce.</p>

                        </div>

                        <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  my-[30px] lg:my-0 p-[30px]'>

                            <img src={food2} className='rounded-[50%]  mx-auto lg:w-[250px] lg:h-[250px]' alt="" />

                            <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>Shashlik Korahi</h1>
                            <p className='text-[16px] mt-[10px] font-light'>Tender diced chicken tikka places cooked with barbecued tomatoes, onions & capsicum, Served in a thick spicy sauce, chef secret spices & herbs.</p>

                        </div>
                        <div className='bg-black text-white shadow-xl hover:shadow-2xl rounded-[10px] lg:w-[370px]  p-[30px]'>

                            <img src={food3} className='rounded-[50%] mx-auto lg:w-[250px] lg:h-[250px]' alt="" />

                            <h1 className='text-[24px] font-semibold mt-[20px] text-amber-200'>Hyderabadi Ghost</h1>
                            <p className='text-[16px] mt-[10px] font-light'>Lamb cooked in very special spices with spinach & paneer.</p>

                        </div>
                    </div>

                    {/* Our Awesome Restaurant */}

                    <div className='mt-[100px] lg:flex gap-[60px] items-center'>
                        <div className='lg:w-[600px]'>
                            <h2 className='text-[40px] font-semibold text-black '>Our Awesome Restaurant</h2>
                            <p className='flex items-end mt-[10px] gap-[4px] text-orange-700 text-[24px]'>Authentic Indian flavors <hr className='w-[80px] rounded-[2px]  border-amber-200 border-[1px]' /></p>

                            <p className='mt-5 lg:w-[350px] font-light'>Experience the flavors of Madras at Madras Spice, located in Sale Moor, Manchester. Our menu features a wide variety of authentic dishes made with fresh ingredients and bold spices. Our friendly staff will ensure you have a memorable dining experience. Stop by for lunch or dinner. We can't wait to see you at Madras Spice!</p>

                            <button class="custom-btn btn-7 font-semibold ml-0 mt-[20px] w-[130px] h-[40px]"><span>CHECK MENU</span></button>
                        </div>


                        <div className='mt-[30px] lg:mt-0 '>

                            <img src={indian1} className='lg:w-[400px] w-[250px] ml-[20px] lg:-ml-[30px] rounded-[10px]' alt="" />

                            <img src={indian3} className='lg:w-[500px] w-[320px] MarginLeft -mt-[180px] xl:-mt-[300px] lg:-mt-[250px]  lg:ml-[50px] xl:ml-[100px] rounded-[10px]' alt="" />

                            <img src={indian2} className='lg:w-[350px] w-[250px] lg:-ml-[100px] -mt-[150px] lg:-mt-[220px]  rounded-[10px]' alt="" />

                        </div>
                    </div>



                    {/* Tasty Menu */}

                    <div className='mt-[100px] border-b-[2px] border-orange-600 rounded-[10px]  lg:w-[500px] mx-auto'>
                        <p className='text-center text-[35px] font-semibold  '>Tasty Menu  <span className='text-white'>Today</span></p>
                        <p className='text-xl text-center text-orange-600 mb-[10px] mt-[15px] uppercase'>CHEF SELECTION</p>
                    </div>



                    <div className='bg-black text-amber-200 mt-[50px] shadow-2xl rounded-[10px] p-5 lg:p-[50px]'>
                        <h1 className='text-[25px] font-medium mt-[50px]'>SIGNATURE DISHED</h1>

                        {/* 1 */}
                        <div className='mt-[50px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className=' text-[14px] lg:text-[18px] flex items-center font-medium'> Madras Spice Special Tawa</h1>

                                    <p className='lg:block hidden text-gray-500 lg:ml-3 ml-2'>-------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[14px]  lg:text-[22px] text-[#fa6e3a]'>£ 10.95</p>
                                </div>






                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>An exotic selection of tandoori grill dished, consist of lamb chops, chicken tikka, lamb tikka, king prawn & keema cooked with olive oil, mustard, roasted green peppers, red onions & egg on top.</p>

                            </div>
                        </div>

                        {/* 2 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Lamb Chops Karahi</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 10.95</p>
                                </div>






                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Bangladeshi style aromatic spices cooked with fried red, green peppers garnished with shatkora, coriander, herbs & spice.</p>

                            </div>
                        </div>

                        {/* 3 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Honey Duck</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 10.95</p>
                                </div>






                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Succulent char grilled breast cooked with homemade honey, stir fried, red & green peppers, onion & aromatic duck, herbs & spices.</p>

                            </div>
                        </div>

                        {/* 4 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Balti Excotica</h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 11.95</p>
                                </div>






                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Cooked with tandoori chicken, lamb tikka, chicken tikka & king prawn, medium spiced balti sauce.</p>

                            </div>
                        </div>

                        {/* 5 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Hyderabadi Ghost
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 9.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Lamb cooked in very special spices with spinach & paneer.</p>

                            </div>
                        </div>

                        {/* 6 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Garlic Chilli (Chicken or Lamb)
                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 9.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Pieces of meat cooked in garlic and chilli sauce with coriander leaves and crisp green chillies.</p>

                            </div>
                        </div>

                        {/* 7 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Sabzi Bahar

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 7.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Cooked with mix veg, paneer, cauliflower, potatoes & aubergine in a thick medium sauce.</p>

                            </div>
                        </div>

                        {/* 8 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Shatkora (Chicken or Lamb)

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 8.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Cooked with secrets selection of spices & shatkora for a tangy taste. <br />

                                    (Shatkora is a tropical fruit found only in Bangladesh)</p>

                            </div>
                        </div>

                        {/* 9 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Salmon Naga

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>-----------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 11.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Tender grilled pieces of salmon cooked with chef’s special homemade sauce to create modernant special dish.</p>

                            </div>
                        </div>

                        {/* 10 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Balti Fried Cham Cham

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 9.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Fried chicken cooked in masala with red & green pepper & tomatoes.</p>

                            </div>
                        </div>

                        {/* 11 */}

                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Shashlik Korahi

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 10.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Tender diced chicken tikka places cooked with barbecued tomatoes, onions & capsicum, Served in a thick spicy sauce, chef secret spices & herbs.</p>

                            </div>
                        </div>

                        {/* 12 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Zingha Bhuna

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 11.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Large grilled King Prawn cooked with red & green pepper, onions & capsicum, Served in a thick spicy sauce, chef secret spices & herbs.</p>

                            </div>
                        </div>

                        {/* 13 */}

                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Shahi Mix

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>--------------------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 9.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>Strip chicken tikka & minced lamb cooked with ginger, garlic & rich blend of medium spices & herbs topped with boiled egg.</p>

                            </div>
                        </div>

                        {/* 14 */}
                        <div className='mt-[80px]'>
                            <div >
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-[14px] lg:text-[18px] flex items-center font-medium'> Garlic Mannchura

                                    </h1>

                                    <p className='text-gray-500 lg:ml-3 ml-2 lg:block hidden'>----------------------------------------------------------------------------------------</p>


                                    <p className='lg:ml-3 ml-2 text-[12px] lg:text-[22px] text-[#fa6e3a]'>£ 9.95</p>
                                </div>

                                <p className='mt-[20px] text-white text-[12px] lg:text-[16px] font-light'>(Chicken, Lamb, Veg) whole garlic, onions & peppers slowly cooked producing a full garlic flavoured dish.</p>

                            </div>
                        </div>







                    </div>

                    <div className=' flex justify-center items-center mt-[50px]'>
                        <Link to='/menu' onClick={() => {
                            window.scrollTo(0, 0);




                        }} >  <button class="custom-btn btn-14 font-semibold  text-[20px] w-[160px] h-[50px] ">Full MENU</button></Link>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Menus;