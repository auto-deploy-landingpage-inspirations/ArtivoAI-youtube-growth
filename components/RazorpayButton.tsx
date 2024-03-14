import React, { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.setAttribute('data-payment_button_id', "pl_NmMNfFUJrT8ub2");

    const form = document.getElementById('razorpay-form');
    if (form) {
      form.appendChild(script);
    }

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };
  }, []);

  return <form id="razorpay-form" />;
};

export default RazorpayButton;
