/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const MyEnroll = () => {
    const [myClass, setMyClass] = useState([]);
    const{user, loading} =useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://sakib-cricket-academy-server-noman1802.vercel.app/enroll/${user?.email}`)
        .then(res=> res.json())
        .then(data =>{
            // console.log(data);
            setMyClass(data)
        })
    },[user.email])
    const total = myClass.reduce((sum, cls) => cls.price + sum, 0);
    return (
        <div className='w-2/3'>
            <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>Payment History:</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center'>
           <h1 className='text-center text-lg text-stone-400 my-4 '>Total Classes {myClass.length}</h1>
            <h1 className='text-center text-lg text-stone-400 my-4 '>Total tuition fee: {total} </h1>
           </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Transaction Id</th>
                            <th>Price</th>
                            <th>Date</th>
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
                                    {cls.transactionId}
                                </td>
                                <td>${cls.price}</td>
                                <td>{cls.date}</td>
                                <td>{cls.status}</td>
                                
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyEnroll;