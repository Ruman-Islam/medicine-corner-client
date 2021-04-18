import React, { useEffect, useState,useContext } from 'react';
import './Review.css';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import { userContext } from '../../../App';


const Review = () => {

    // const [allReviews, setAllReviews] = useState([]);
    const [loggedInUser, setLoggedInUser, allProducts, setAllProducts] = useContext(userContext)

    const reviews = allProducts.filter(review => review.catagory === 'review')

    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="w-75 row">
            <h1 className="text-center">What our Customer Says</h1>
                {
                    reviews.map(review => <ReviewDetail review={review} key={review.name} />)
                }
            </div>
        </section>
    );
};

export default Review;