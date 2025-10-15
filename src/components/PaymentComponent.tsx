"use client";

import React, { useState } from 'react';
import Razorpay from 'react-razorpay';

interface PaymentComponentProps {
  amount: number; // Amount in INR
  description: string;
  onSuccess?: () => void;
  onFailure?: () => void;
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({ amount, description, onSuccess, onFailure }) => {
  const [loading, setLoading] = useState(false);

  // Replace with your actual Razorpay key
  const razorpayKey = 'rzp_test_YOUR_KEY_HERE'; // User needs to provide this

  const options = {
    key: razorpayKey,
    amount: amount * 100, // Amount in cents for USD
    currency: 'USD',
    name: 'Guidesoft IT Solutions',
    description: description,
    handler: (response: any) => {
      setLoading(false);
      if (onSuccess) onSuccess();
      console.log('Payment Success:', response);
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    theme: {
      color: '#3399cc',
    },
    modal: {
      ondismiss: () => {
        setLoading(false);
        if (onFailure) onFailure();
      },
    },
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Pay Now</h3>
      <p className="text-muted-foreground">Amount: ${amount}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <button
        onClick={() => {
          setLoading(true);
          // Trigger Razorpay
          const rzp = new (Razorpay as any)(options);
          rzp.open();
        }}
        disabled={loading}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Pay with Card/Netbanking'}
      </button>
    </div>
  );
};

export default PaymentComponent;
