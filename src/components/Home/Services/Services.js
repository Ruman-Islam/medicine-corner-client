import React, { useEffect, useState, useContext } from 'react';
import { userContext } from '../../../App';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {

    // const [allServices, setAllServices] = useState([]);
    const [loggedInUser, setLoggedInUser, allServices, setAllServices] = useContext(userContext)
    useEffect(() => {
        fetch('https://agile-citadel-23321.herokuapp.com/all')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
    }, [])

    const services = allServices.filter(service=> service.catagory === 'service');

    return (
        <section className="mb-5 mt-5">
            <h1 className="text-center">Our Services</h1>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-2">
                    {
                        services.map(service => <ServiceCard service={service} />)
                    }
                </div>
            </div>
            <hr/>
        </section>
    );
};

export default Services;