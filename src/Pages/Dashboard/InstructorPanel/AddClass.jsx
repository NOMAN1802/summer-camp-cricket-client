/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Container from '../../../components/Shared/Container';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // data.sub_category = selectedOption;

        fetch("http://localhost:5000//addClass", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);

            });
        console.log(data);
        {
            data &&
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Toy added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
        }

    }
    return (
        <div className='w-1/2'>
            <form onSubmit={handleSubmit(onSubmit)}>
                

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="text"
                        className="text-input shadow-lg"
                        {...register("name")}
                        placeholder="Class Name"
                    />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("instructor")}
                        placeholder="Instructor Name"
                        value={user.displayName}
                        readOnly

                    />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        value={user?.email}
                        {...register("email")}
                        placeholder="Instructor email"
                        type="email"
                        readOnly
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("picture")}
                        placeholder="image link"
                        type="url"
                        defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />

                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("price", { required: true })}
                        type='number'
                        placeholder="price"

                    />

                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>


                    <input
                        className="text-input shadow-lg"
                        {...register("available_set")}
                        placeholder="Available set"

                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        className="text-input shadow-lg"
                        {...register("available_quantity")}
                        placeholder="available_quantity"

                    />
                </div>

                <input className="btn btn-accent w-2/3 mx-auto mt-8" value="Add Class" type="submit" />
            </form>
        </div>
    );
};

export default AddClass;