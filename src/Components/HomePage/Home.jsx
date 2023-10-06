import React from 'react';
import Banner from './Banner';
import Menus from './Menus';
import PopularCourses from './PopularCourses';

const Home = () => {
    return (
        <>
            <div>

                <Banner />

                <Menus />

                <PopularCourses />

            </div>

        </>
    );
};

export default Home;