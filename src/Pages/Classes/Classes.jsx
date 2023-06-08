/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Container from '../../components/Shared/Container';
import { Helmet } from 'react-helmet';
import ClassesCard from './ClassesCard';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popular')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
        <Container>
             <Helmet>
                <title>SH75 Academy | Classes</title>
            </Helmet>
            <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>All Classes</h1>
           <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4'>
             {
                classes.map(cls => <ClassesCard key={cls._id} cls ={cls}></ClassesCard>)
             }
           </div>
        </Container>
    );
};

export default Classes;