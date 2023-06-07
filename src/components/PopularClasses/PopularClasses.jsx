/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('/classes.json')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
        <div className='mx-auto'>
             <h1 className='text-center text-3xl text-stone-500 my-8'>Popular Classes</h1>
           <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between'>
             {
                classes.map(popular => <PopularClassCard key={popular.price} popular ={popular}></PopularClassCard>)
             }
           </div>

        </div>
    );
};

export default PopularClasses;