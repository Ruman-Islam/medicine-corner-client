import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            description: data.description,
            catagory: data.catagory,
            price: data.price
        };

        const url = 'http://localhost:5055/addService';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log("server side response", res)
            })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '4e60d7b3edd0a5bdac9e7ff22096f866');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="add-area">
            <div className="inner-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="" ref={register({ required: true })} placeholder="Service Name" />
                    <br />
                    <input name="description" defaultValue="" ref={register({ required: true })} placeholder="Description" />
                    <br />
                    <input name="catagory" defaultValue="" ref={register({ required: true })} placeholder="Catagory" />
                    <br/>
                    <input name="price" defaultValue="" ref={register({ required: true })} placeholder="Price" />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;