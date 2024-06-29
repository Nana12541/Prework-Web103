import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import ViewCreator from './ViewCreator.jsx'
import { supabase } from '../components/Client.jsx'

const AddCreator = () => {
    {/* Go over the CRUD stuff in the pages folder. Here, we want to 
    first fix the table information and change the table. You then
    want to start adding the links and images. The goal is to have the
    site showing the creator information. */}
    
    const [name, setName] = useState("Name");
    const [description, setDescription] = useState("Description");
    const [url, setUrl] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [error, setError] = useState(null);

    /* This is used to access the table and add a new creator. */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !url || !image_url || !description) {
            setError("Need to enter information.")
            return;
        }

        const {data, error} = await supabase
            .from("Creators")
            .insert( [ { name, url, image_url,  description } ] )
            .select();

        if (error) {
            console.log(error);
            setError("Error ");
        }

        if (data) {
            setError(null);
        }
    }

    return (
        <>
            <div className='created-page'>
                <form onSubmit={handleSubmit}>
                    
                    {/*Add a label for the form. We need the
                    type, id, value, and what happens as we change it. We are essentially
                    using a form to style the database entry. */}
                    
                    <label htmlFor='color'> Name: </label>
                    <input type='text' id='name' value={name}
                    onChange={(e) => setName(e.target.value)} /> <br/> <br/>

                    <label htmlFor='color'> Url: </label>
                    <input type='text' id='url' value={url}
                    onChange={(e) => setUrl(e.target.value)} /> <br/> <br/>

                    <label htmlFor='color'> Image Url: </label>
                    <input type='text' id='imageUrl' value={image_url}
                    onChange={(e) => setImageUrl(e.target.value)} /> <br/> <br/>

                    <label htmlFor='name'> Description: </label>
                    <input type='description' id='description' value={description}
                    onChange={(e) => setDescription(e.target.value)} /> <br/> <br/>

                    <button className='create-btn'> Add a creator </button>
                    {error && <p className='error-val'>{error}</p>}
                </form>
            </div>
        </>     
    )
};

export default AddCreator;