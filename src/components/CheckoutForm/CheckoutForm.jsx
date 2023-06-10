/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const stripe = useStripe();
     const elements = useElements()
     const [payError, setPayError] =useState('')
    const handleSubmit = async(event) =>{
        event.preventDefault();
       if(!stripe || !elements ){
        return
       }
    const card = elements.getElement(CardElement);
       if(card === null){
        return
       }
       const { error,paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if (error) {
        console.log('error', error)
        setPayError(error.message);
    }
    else {
        setPayError('');
        console.log('payment method', [paymentMethod])
    }
      
    }
    return (
        <>
        <form onSubmit={handleSubmit} className='m-16 w-full'>
            <h2 className='text-stone-300 my-8 text-xs'>Pay the amount via your card to enroll the course</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-accent btn-sm my-4' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {payError && <p className='text-sm text-slate-600 mx-auto'>Card error: {payError} </p>}
        </>
    );
};

export default CheckoutForm;