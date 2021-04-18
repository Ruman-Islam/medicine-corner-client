import React from 'react';
import { useHistory } from 'react-router';

const Products = ({ product }) => {
    const history = useHistory();
    const handleCheckOut = id => {
        history.push(`/checkout/${id}`);
    }

    return (
        <div className="col-md-4 text-center">
            <div>
                <img className="img-fluid" src={product.productImage} alt="" />
            </div>
            <div>
                <h6>{product.productName}</h6>
                <small className="text-secondary">{product.description}</small>
                <h6>${product.price}</h6>
                <button onClick={() => handleCheckOut(product._id)} style={{width: '100px'}} className="btn btn-success">BUY</button>
            </div>
        </div>
    );
};

export default Products;