/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet';
import Slider from '../../components/Slider/Slider';
import BannerText from '../../components/BannerText/BannerText';
import PopularClasses from '../../components/PopularClasses/PopularClasses';

const Home = () => {
    return (
        <Container>
             <Helmet>
                <title>SH75 Academy | Home</title>
            </Helmet>
            
            <div className='grid grid-cols-1 md:grid-cols-2'>

             <BannerText/>   
            <Slider></Slider>
            
            </div>
            <PopularClasses></PopularClasses>
        </Container>
    );
};

export default Home;