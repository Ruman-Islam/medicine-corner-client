import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            quote: data.quote,
            catagory: data.catagory,
            imageURL: imageURL
        };

        const url = 'https://agile-citadel-23321.herokuapp.com/addReview';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                console.log("server side response", res)
            })
    }

    const handleImageUpload = event => {
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
                    <input name="name" defaultValue="" ref={register({ required: true })} placeholder="Your Name" />
                    <br />
                    <input name="quote" defaultValue="" ref={register({ required: true })} placeholder="Quote" />
                    <br />
                    <input name="catagory" defaultValue="" ref={register({ required: true })} placeholder="Catagory" />
                    <br/>
                    <label>Your Photo</label>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;