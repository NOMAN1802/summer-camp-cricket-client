/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Pages/providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {



    const {user, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: loggedInUser.role }
                fetch('https://sakib-cricket-academy-server-noman1802.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
            <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer rounded" >
                <FcGoogle size={32}></FcGoogle>
                <span className='ml-2'>Continue With google</span>
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;