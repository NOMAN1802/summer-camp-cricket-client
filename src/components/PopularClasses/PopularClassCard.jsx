/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PopularClassCard = ({popular}) => {
    const {image} = popular;
    return (
        <div className='col-span-1 cursor-pointer group'>
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
          >
            <img
              className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
              src={image}
              alt='Room'
            />
            <div
              className='
              absolute
              top-3
              right-3
            '
            >
             
            </div>
          </div>
          <div className='font-semibold text-lg'>{popular.class_name}</div>
          
          <div className='flex flex-row items-center gap-1'>
            <div className='font-semibold'>{popular.instructor_name}</div>
            
            <div className='font-light'>{popular.available_sit}</div>
          </div>
        </div>
      </div>
    );
};

export default PopularClassCard;