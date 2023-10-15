import React from 'react';
import Banner from './Banner';
import Menus from './Menus';
import PopularCourses from './PopularCourses';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Home -Madras Spice</title>
                </Helmet>

                <Banner />

                <Menus />

                <PopularCourses />

            </div>

        </>
    );
};

export default Home;