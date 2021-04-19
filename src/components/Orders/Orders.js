import React, { useEffect, useContext, useState } from 'react';
import { userContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext);
    const [data, setData] = useState([]);
    console.log('user ',loggedInUser)

    useEffect(() => {
        fetch('https://agile-citadel-23321.herokuapp.com/getOrder?name=' + loggedInUser.name)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Order List </h1><br/>
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