/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../../../components/Shared/Container';
import CheckoutForm from '../../../components/CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const Payment = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-stone-500'>Pay Now!</h2>
            
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;