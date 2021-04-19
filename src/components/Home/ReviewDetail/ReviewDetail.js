import React from 'react';

const ReviewDetail = (props) => {
    const { quote, userName, imageURL } = props.review;
    return (
        <div style={{backgroundColor: 'steelblue', borderRadius: '8px'}} className="d-flex justify-content-between align-items-center card-footer mb-2">
            <div style={{width: "250px"}} className="align-items-center p-4">
                <img className="img-fluid" src={imageURL} alt="" width="60px" />
                <h6 style={{color: 'white'}} className="">{userName}</h6>
            </div>
            <div className="align-items-center">
                <p className="card-text">{quote}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;