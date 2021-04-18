import React from 'react';

const OrderDetails = ({ event }) => {
    return (
        <div className="container">
            {
                event ? (<div>
                    <h5>Product Name : {event.productName}</h5>
                    <p>Quantity : {event.quantity}</p>
                    <p>Order Date: {new Date(event.date).toDateString('dd/MM/yyyy')}</p>
                    <p>Price : ${event.price}</p>
                </div >
                ) : (
                    <h2>You have no order</h2>
                )
            }
        </div>
    );
};

export default OrderDetails;