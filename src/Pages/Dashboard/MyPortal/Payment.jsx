/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../../../components/CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import useClass from '../../../hooks/useClass';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key)
const Payment = () => {
    const {id} = useParams();
    const [classes] = useClass();
    const total = classes?.reduce((sum, item) => (sum = 0) + item.price, 0);
    

    // const price = classes.find(item => item.price)


    // const [classes, setClasses] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/selectedClasses/${id}`)
    //       .then(res => res.json())
    //       .then(data => {
    //         setClasses(data); // Update the state with the fetched data
    //       });
    //   }, [id]);
    //   console.log(classes);
    // const total = classes?.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <h2 className='text-2xl font-semibold text-stone-500'>Pay Now!</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm classes={classes} price={total} >
            </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;