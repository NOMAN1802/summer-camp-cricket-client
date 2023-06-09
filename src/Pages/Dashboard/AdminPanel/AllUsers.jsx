/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [],  refetch} = useQuery(['users'], async ()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    console.log(users.role);

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    console.log(users);
    return (
        <div className='w-2/3'>
        <h1 className='text-center text-3xl text-stone-500 my-8 font-semibold'>All Users: {users.length}</h1>
      
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
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Make Instructor</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <tr
                            key={user._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>{user.email}</td>
                            <td>
                                {user.role}
                            </td>
                            
                            <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-black opacity-30  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>

                            <td>
                                {user.role === 'instructor' ? 'instructor' :
                                    <button onClick={()=> handleMakeInstructor(user)}  className="btn btn-ghost bg-black opacity-30 rounded-2xl text-white"><FaUser></FaUser></button>
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

export default AllUsers;