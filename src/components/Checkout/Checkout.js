import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext);
    const { id } = useParams();
    const product = allProducts.find(Element => Element._id === id);
    console.log(product)

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
        <div className="container pt-5 mt-5">
            <h1 style={{fontSize: '50px'}}>CheckOut</h1>
            {
                product && <div>
                    <h5>Name : {product.productName}</h5>
                    <p>Quantity : 1 </p>
                    <p>Price : {product.price}</p>
                    <button className="btn btn-primary" onClick={handleOrder}>CheckOut</button>
                </div>
            }

        </div>
    );
};

export default CheckOut;