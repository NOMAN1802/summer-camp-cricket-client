/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import SocialLogin from '../../components/Shared/SocialLogin';
import login from '../../assets/login.json'
import { BsEye } from 'react-icons/bs'
import Container from '../../components/Shared/Container';



const Login = () => {
   
    const { signIn } = useContext(AuthContext);
    const [viewPassword, setViewPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

     const from = location.state?.from?.pathname || '/'

   

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/');

                  navigate(from, {replace: true});
            })
    }


    const handleViewPassword  = () => {
        setViewPassword(!viewPassword);
      };

    return (
        <Container>
            <Helmet>
                <title>SH75 Academy | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center mr-8  md:w-1/2 lg:text-left">
                    <Lottie animationData={login} loop={true} />
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-blue-200 text-center pt-8">Login <span className='text-stone-200'>now!</span></h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
            
                                    <input type={viewPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" />
                                    <div onClick={handleViewPassword} className='mt-4 flex gap-4 items-center'><BsEye></BsEye> {viewPassword ? 'Hide' : 'Show'}</div>
                                
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                           
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary"
                                    
                                    type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'> <small>New Here? <Link to='/register'>Create an account</Link> </small> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;