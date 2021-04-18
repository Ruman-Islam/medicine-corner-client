import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Products from '../Products/Products';

const FeaturedProducts = () => {

    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext);
    // const [allProducts, setAllProducts] = useState([]);

    const products = allProducts.filter(product => product.catagory === 'product')

    return (
        <section className="mt-5 mb-5">
            <h2 className="text-center">Featured Products</h2>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        products.map(product => <Products product={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;