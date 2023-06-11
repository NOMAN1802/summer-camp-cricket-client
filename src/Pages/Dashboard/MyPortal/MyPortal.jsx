/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../../../components/Shared/Container';
import useClass from '../../../hooks/useClass';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';

const MyPortal = () => {
    const [classes, refetch] = useClass();
    console.log(classes);
    const total = classes.reduce((sum, cls) => cls.price + sum, 0);

    const handleDelete = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${cls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-2/3'>
            <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>All Added Classes</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center'>
           <h1 className='text-center text-lg text-stone-400 my-4 '>Total Classes {classes.length}</h1>
            <h1 className='text-center text-lg text-stone-400 my-4 '>Total tuition fee: {total} </h1>
            {/* <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link> */}
           
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
                            <th>Delete</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((cls, index) => <tr
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
                                    {cls.class_name}
                                </td>
                                <td>${cls.price}</td>
                                <td>
                                    <button  onClick={() => handleDelete(cls)}  className="btn btn-ghost bg-red-400  text-white"><FaRegTrashAlt></FaRegTrashAlt></button>
                                </td>
                                <td>
                                <NavLink to={`/dashboard/payment/${cls._id}`}> <button className='btn btn-accent btn-sm m-12'>Pay</button></NavLink>

                                </td>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyPortal;