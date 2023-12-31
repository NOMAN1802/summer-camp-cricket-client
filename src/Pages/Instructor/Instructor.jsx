/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import InstructorCard from "./InstructorCard";


const Instructor = () => {
    
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://sakib-cricket-academy-server-noman1802.vercel.app/classes')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setInstructors(data)
        })
    },[])
    return (
        <Container>
              <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>Popular Instructors</h1>
           <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4'>
             {
                instructors.map(inst => <InstructorCard key={inst._id} inst ={inst}></InstructorCard>)
             }
           </div>
        </Container>
    );
};

export default Instructor;