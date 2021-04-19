import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from '../PaymentCard/PaymentCard';

const stripePromise = loadStripe('pk_test_51Ie122BgoNPnJ9PsOBsvki1BkTcQVp6b39eTR7b3rvDMx3iYWAVreWIxJiXADDnILvmJPQ4Mn8YsN7HLm6H1aTcP00gLGZhD34');

const Payment = () => {
    return (
       
            <Elements stripe={stripePromise}>
               <PaymentCard></PaymentCard>
           </Elements>
       
    );
};

export default Payment;