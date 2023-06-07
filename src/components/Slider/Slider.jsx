/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/Slider/slider-1.jpg'
import img2 from '../../assets/Slider/slider-2.jpg'
import img3 from '../../assets/Slider/slider-3.jpg'

const Slider = () => {
    return (
        <Carousel className='text-center container my-8'>
       
        <div>
            <img src={img1} />
           
        </div>
        
        <div>
            <img src={img2} />  
        </div>
       
        <div>
            <img src={img3} />  
        </div>
    </Carousel>
    );
};

export default Slider;