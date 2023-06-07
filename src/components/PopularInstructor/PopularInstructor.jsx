/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import PopularInstructorCard from './PopularInstructorCard';
const PopularInstructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popular')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setPopularInstructors(data)
        })
    },[])
    return (
        <Container>
              <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>Popular Instructors</h1>
           <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4'>
             {
                popularInstructors.slice(0,6).map(inst => <PopularInstructorCard key={inst._id} inst ={inst}></PopularInstructorCard>)
             }
           </div>
        </Container>
    );
};

export default PopularInstructor;