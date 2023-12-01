// components/Orders.js
import React, { useState, useEffect } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            // Fetch the user's orders from the API
            const response = await fetch('/api/orders/');
            const data = await response.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            {/* Display user's orders */}
            {orders.map(order => (
                <div key={order.id}>
                    <p>{order.artwork.title}</p>
                    {/* Add other order details */}
                </div>
            ))}
        </div>
    );
};

export default Orders;
