/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const PopularClassCard = ({popular}) => {
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
              src={popular.image}
              alt=''
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
          <div className='font-semibold text-center text-stone-400 text-lg'>{popular.class_name}</div>
          <div className='font-normal text-center text-stone-400 text-sm'>enrolled: {popular.number_of_student}</div>
        </div>
      </div>
    )   
};

export default PopularClassCard;