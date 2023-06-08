/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from '../../components/Shared/Container';
import { AuthContext } from '../providers/AuthProvider';

const ClassesCard = ({cls}) => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            {
          (cls.number_of_student === cls.available_sit
          ) ? <div>
            <div className="card card-compact w-96  shadow-xl bg-red-300">
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.class_image} alt="" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{cls.class_name}</h2>
        
       <div className='flex'>
       
        <p className='text-sm text-stone-400 text-center'>Price: {cls.price}</p>
        <p className='text-sm text-stone-400 text-center'>Available set: 0</p>
       </div>

         <button className='btn btn-accent' disabled>Select</button>
       

      </div>
    </div>
          </div> : 


<div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.class_image} alt="" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{cls.class_name}</h2>
        <p className='text-medium text-stone-400 text-center'>Instructor: {cls.instructor_name}</p>
        <div className='flex'>
       
        <p className='text-sm text-stone-400 text-center'>Price: {cls.price}</p>
        <p className='text-sm text-stone-400 text-center'>Available set: {cls.available_sit - cls.number_of_student}</p>
        </div>

        
       
        { user.role === 'student'?
        <button className='btn btn-accent' disabled>Select</button>
        : <button className='btn btn-accent' >Select</button>
      }

      </div>
    </div>
        }
        </Container>
    );
};

export default ClassesCard;