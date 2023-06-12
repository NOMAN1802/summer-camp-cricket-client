/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Pages/providers/AuthProvider";
import Swal from "sweetalert2";





const CheckoutForm = ({ classes, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
          
        }

        setProcessing(true)
       

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent?.status === 'succeeded') {
          
            setTransactionId(paymentIntent.id);
            // Save information Of payment in Data base


    }
            const payment = {
                name: user.displayName,
                email: user?.email,
                transactionId: paymentIntent?.id,
                price,
                image: classes.image,
                class_name: classes.class_name,
                paymentClassId: classes?._id,
                course: classes.class_name,
                date: new Date(),
                total_enroll: classes.length,
                status: 'paid',
                
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                     if(res.data.insertedResult){
                         Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.displayName} You pay successfully`,
                            showConfirmButton: false,
                            timer: 1500
                          })
                     }
                       
                     
                })
        }


    

    return (
        <>
         <p className="text-stone-400 text-sm mx-auto">Please insert your card number to enroll and enjoy the class!!!</p>

            <form className="full m-8" onSubmit={handleSubmit}>
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
                
                <button className="btn btn-ghost border-blue-400 btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

            </form>
            {cardError && <p className="text-stone-700 ml-8">{cardError}</p>}
            {transactionId && <p className="text-stone-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;