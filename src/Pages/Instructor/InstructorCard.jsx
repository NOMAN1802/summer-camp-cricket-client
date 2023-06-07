/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InstructorCard = ({inst}) => {

    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img style={{width: '360px', height: '300px'}} src={inst.instructor_image} alt=""/></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{inst.instructor_name}</h2>
        <p className='text-sm text-stone-400 text-center'>{inst.instructor_email}</p>
        <div>
          {
             (inst.number_of_student === inst.available_sit
              ) ? 'color' : ''
          }
              
          
        </div>
        
      </div>
    </div>
    );
};

export default InstructorCard;