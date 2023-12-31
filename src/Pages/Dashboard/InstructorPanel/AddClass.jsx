/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from '../../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // data.sub_category = selectedOption;

        fetch("https://sakib-cricket-academy-server-noman1802.vercel.app/addClass", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                if(data.insertedId){

                 reset()
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/myClass');

                } 
             })
              
             
        
        .catch(error => console.log(error));
     
    
 }
    return (
        <div className='card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'> 
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-slate-400">Class Name</span>
                    </label>

                    <input type="text"
                        className="text-input shadow-lg"
                        {...register("class_name")}
                        placeholder="Class Name"
                    />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("instructor_name")}
                        placeholder="Instructor Name"
                        value={user.displayName}
                        readOnly

                    />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        value={user?.email}
                        {...register("instructor_email")}
                        placeholder="Instructor email"
                        type="email"
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">class image</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("image")}
                        placeholder="image link"
                        type="url"
                        
                    />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor image</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("instructor_image")}
                        placeholder="image link"
                        type="url"
                        
                    />

                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("price", {
                            valueAsNumber: true,
                            pattern:{
                               value: /^(0|[1-9]\d*)(\.\d+)?$/
                            },
                          })}
                        placeholder="price"

                    />

                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">sets</span>
                    </label>


                    <input
                        className="text-input shadow-lg"
                        
                        {...register("available_sit", {
                            valueAsNumber: true,
                            pattern:{
                               value: /^(0|[1-9]\d*)(\.\d+)?$/
                            },
                          })}
                        placeholder="Available set"

                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Number of Students</span>
                    </label>


                    <input
                        className="text-input shadow-lg"
                        
                        {...register("number_of_student", {
                            valueAsNumber: true,
                            pattern:{
                               value: /^(0|[1-9]\d*)(\.\d+)?$/
                            },
                          })}
                        placeholder="Number of student"

                    />
                </div>

                <input className="btn btn-accent btn-sm w-full mx-auto mt-8" value="Add Class" type="submit" />
            </form>
        </div>
    );
};

export default AddClass;