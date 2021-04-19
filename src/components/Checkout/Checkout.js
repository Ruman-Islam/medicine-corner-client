import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Payment from '../Payment/Payment';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext);
    const { id } = useParams();
    const product = allProducts.find(Element => Element._id === id);

    const handleOrder = () => {
        const userOrder = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            productName: product.productName,
            quantity: 1,
            price: product.price,
            date: new Date()
        }

        fetch('https://agile-citadel-23321.herokuapp.com/addOrder', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="container pt-5 mt-2">
            <h1 style={{fontSize: '50px', textAlign: 'center'}}>CheckOut</h1><br/>
            {
                product && <div className="row">
                    <div style={{padding: '30px'}} className="col-md-6 card">
                    <h5>Product Name : {product.productName}</h5>
                    <h5>Quantity : 1 </h5>
                    <h6>Price : {product.price}</h6>
                    <button className="btn btn-primary" onClick={handleOrder}>CheckOut</button>
                    </div>
                    <div style={{padding: '30px'}} className="col-md-6 card">
                        <Payment />
                    </div>
                </div>
            }

        </div>
    );
};

export default CheckOut;