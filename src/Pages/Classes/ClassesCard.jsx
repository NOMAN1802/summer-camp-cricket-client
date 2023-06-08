/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../../components/Shared/Container';

const ClassesCard = ({cls}) => {
    return (
        <Container>
            {
          (cls.number_of_student === cls.available_sit
          ) ? <div>
            <div className="card card-compact w-96  shadow-xl bg-red-300">
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.class_image} alt="" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{cls.class_name}</h2>
        <p className='text-sm text-stone-400 text-center'>{cls.instructor_name}</p>
        <p className='text-sm text-stone-400 text-center'>{cls.price}</p>
        
       

      </div>
    </div>
          </div> : 


<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.class_image} alt="" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{cls.class_name}</h2>
        <p className='text-sm text-stone-400 text-center'>{cls.instructor_name}</p>
        <p className='text-sm text-stone-400 text-center'>{cls.price}</p>

        
       

      </div>
    </div>
        }
        </Container>
    );
};

export default ClassesCard;