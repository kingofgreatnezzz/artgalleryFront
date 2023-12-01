// components/ShoppingCart.js
import React, { useState, useEffect } from 'react';

const ShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() => {
        const fetchShoppingCart = async () => {
            // Fetch the user's shopping cart from the API
            const response = await fetch('/api/shopping-cart/');
            const data = await response.json();
            setShoppingCart(data);
        };

        fetchShoppingCart();
    }, []);

    return (
        <div>
            {/* Display shopping cart items */}
            {shoppingCart.map(item => (
                <div key={item.id}>
                    <p>{item.artwork.title}</p>
                    {/* Add other shopping cart item details */}
                </div>
            ))}
        </div>
    );
};

export default ShoppingCart;
