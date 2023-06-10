/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


const MyClass = () => {
    const [myClass, setMyClass] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addClass')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setMyClass(data)
        })
    },[])
    return (
        <div className='w-2/3'>
            <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>My Classes</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center'>
           <h1 className='text-center text-lg text-stone-400 my-4 '>Total Classes {myClass.length}</h1>
            {/* <h1 className='text-center text-lg text-stone-400 my-4 '>Total tuition fee: {total} </h1> */}
           </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Sets</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClass?.map((cls, index) => <tr
                                key={cls._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cls.name}
                                </td>
                                <td>${cls.price}</td>
                                <td>{cls.available_set}</td>
                                <td>{cls.status}</td>
                                {/* <td>
                                    <button  onClick={() => handleDelete(cls)}  className="btn btn-ghost bg-red-400  text-white"><FaUpload></FaUpload></button>
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyClass;