import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { imageURL, name, description, price } = service;

    return (
        <div className="col-md-4 text-center">
            <div style={{cursor: 'pointer'}} className="text-center">
                <img width="320px" height="200px" src={imageURL} className="rounded" />
            </div>
            <div>
                <h3>{service.name}</h3>
                <small>{service.description}</small>
                <h2>${service.price}</h2>
            </div>
        </div>
    );
};

export default ServiceCard;