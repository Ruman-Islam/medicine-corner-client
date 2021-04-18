import React from 'react';

const ReviewDetail = (props) => {
    const { quote, name, imageURL } = props.review;
    return (
        <div className="d-flex justify-content-between align-items-center card-footer">
            <div className="align-items-center p-4">
                <img className="img-fluid" src={imageURL} alt="" width="60px" />
                <h6 className="text-primary">{name}</h6>
            </div>
            <div className="align-items-center">
                <p className="card-text">{quote}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;