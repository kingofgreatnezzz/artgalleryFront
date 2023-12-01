// pages/cart.js
import { useState } from 'react';
import ShoppingCart from '@/components/Cart/ShoppingCart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    // Remove the item from the cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const checkout = () => {
    // Implement the checkout logic (e.g., redirect to a checkout page)
    console.log('Proceeding to checkout...');
  };

  return (
    <div>
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} />
    </div>
  );
};

export default CartPage;
