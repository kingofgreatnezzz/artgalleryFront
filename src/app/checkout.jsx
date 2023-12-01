
import React from 'react';
import Layout from '../components/Layout';
import Checkout from '../components/Checkout/Checkout';


const CheckoutPage = ({ cartItems }) => {
  return (
    <Layout>
      <Checkout cartItems={cartItems} />
    </Layout>
  );
};

export default CheckoutPage;
