import React, { useEffect, useContext, useState } from 'react';
import { userContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/getOrder?name=' + loggedInUser.name)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Order List </h1>
            <h3 style={{ textAlign: 'center' }}>{loggedInUser.name}</h3>
            <div className="row">
                {
                    data.map(event => <OrderDetails event={event}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default Orders;