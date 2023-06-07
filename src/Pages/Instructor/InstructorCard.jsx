/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InstructorCard = ({instructor}) => {
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
              src={instructor.instructor_image}
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
          <div className='font-semibold text-center text-stone-400 text-lg'>{instructor.instructor_name}</div>
          <div className='font-normal text-center text-stone-400 text-sm'>email: {instructor.instructor_email}</div>
        </div>
      </div>
    );
};

export default InstructorCard;