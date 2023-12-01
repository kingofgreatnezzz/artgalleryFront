// components/Checkout.js
import React from 'react';
import { useRouter } from 'next/router';

const Checkout = ({ cartItems }) => {
  const router = useRouter();

  const handleCheckout = async () => {
    // Implement logic for processing the checkout (e.g., send order to backend)
    // ...

    // Redirect to a thank-you page or order confirmation page
    router.push('/thank-you');
  };

  return (
    <div>
      <h2>Checkout</h2>
      {/* Display cart items and total */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.title} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
      {/* Add a button to initiate the checkout process */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Checkout;
