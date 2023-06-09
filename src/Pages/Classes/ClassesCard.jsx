/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { AuthContext } from '../providers/AuthProvider';
import useClass from '../../hooks/useClass';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';


const ClassesCard = ({cls}) => {
    const {_id,class_name, image, price, email,} = cls
    const {user, loading} = useContext(AuthContext)
    const [classes, refetch] = useClass();
    const navigate = useNavigate();
    const location = useLocation();
    const {isAdmin, isAdminLoading} = useAdmin();
    const {isInstructor, isInstructorLoading} = useInstructor();
    
   
    
    const handleAddClass = cls => {
        // console.log(cls);
        if(user && user.email){
            const classInfo = { classId: _id,class_name, price, image, email: user.email, status: user.role}
            console.log(classInfo);
            fetch('http://localhost:5000/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    refetch(); 
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class is successfully added .',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to Purses class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
       
            }
        }

  
    return (
        <Container>
            {
          (cls.number_of_student === cls.available_sit
          ) ? <div>
            <div className="card card-compact w-96  shadow-xl bg-red-300">
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.image} alt="" /></figure>
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
      <figure><img style={{ width: '360px', height: '300px' }} src={cls.image} alt="" /></figure>
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-stone-400 text-center">{cls.class_name}</h2>
        <p className='text-medium text-stone-400 text-center'>Instructor: {cls.instructor_name}</p>
        <div className='flex'>
       
        <p className='text-sm text-stone-400 text-center'>Price: {cls.price}</p>
        <p className='text-sm text-stone-400 text-center'>Available set: {cls.available_sit - cls.number_of_student}</p>
        </div>

        
              
         { user === 'admin' ?
         
         <button className='btn btn-accent' disabled>Select</button>
          :
         <button  onClick={() => handleAddClass(cls)}className='btn btn-accent' >Select</button>
         
          }
          {/* <button onClick={() => handleAddClass(cls)} className='btn btn-accent'>Select</button> */}
         
      </div>
    </div>
        }

        </Container>
    );
};

export default ClassesCard;