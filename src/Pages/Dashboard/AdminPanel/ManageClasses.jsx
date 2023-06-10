/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { FcApproval, FcDisapprove } from 'react-icons/fc';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    })

    const handleApproved = cls => {
        fetch(`http://localhost:5000/classes/approved/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.instructor_name} is Approves!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleApprovedFeedback = cls => {
        fetch(`http://localhost:5000/classes/feedbackApprove/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.instructor_name} Feedback Send!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = cls => {
        fetch(`http://localhost:5000/classes/denied/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: `${cls.instructor_name} is  Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDeniedFeedback = cls => {
        fetch(`http://localhost:5000/classes/feedbackDenied/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${cls.instructor_name} Feedback send!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='w-full'>
            <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>All Classes: {classes.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Available sets</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Denied</th>
                            <th>Approved Feedback</th>
                            <th>Denied Feedback</th>


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
                                <td>
                                    {cls.instructor_name}
                                </td>
                                <td>{cls.instructor_email}</td>
                                <td>{cls.available_sit - cls.number_of_student}</td>
                                <td>{cls.price}</td>
                                <td>{cls.status}</td>

                                <td>{cls.status === 'approve' ? 'approve' :
                                    <button onClick={() => handleApproved(cls)} className="btn btn-ghost  bg-black opacity-30  text-white"><FcApproval></FcApproval></button>
                                }</td>

                                <td>
                                    {cls.status === 'denied' ? 'denied' :
                                        <button onClick={() => handleDenied(cls)} className="btn btn-ghost bg-black opacity-30 rounded-2xl text-white"><FcDisapprove></FcDisapprove></button>
                                    }
                                </td>

                                <td>
                                    {

                                        <button onClick={() => handleApprovedFeedback(cls)} className="btn btn-ghost  bg-black opacity-30  text-white"><FcApproval></FcApproval></button>
                                    }

                                </td>
                                <td>


                                    {
                                        <button onClick={() => handleDeniedFeedback(cls)} className="btn btn-ghost bg-black opacity-30 rounded-2xl text-white"><FcDisapprove></FcDisapprove></button>
                                    }

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

export default ManageClasses;