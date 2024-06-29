import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import ReadPost from './ViewCreator.jsx'
import { supabase } from '../components/Client.jsx'

const CreatePost = () => {
    {/* Go over the CRUD stuff in the pages folder. Here, we want to 
    first fix the table information and change the table. You then
    want to start adding the links and images. The goal is to have the
    site showing the creator information. */}
    
    const [created_at, setDate] = useState(0);
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("Description");
    const [likes, setLikes] = useState(0);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !created_at) {
            setError("Need to enter information.")
            return;
        }

        const {data, error} = await supabase
            .from("Posts")
            .insert( [ { created_at, title, description }] )
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
                    <label htmlFor='color'> Title: </label>
                    <input 
                    type='text'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                    <br/>
                    <br/>

                    <label htmlFor='color'> Date: </label>
                    <input 
                    type='text'
                    id='title'
                    value={created_at}
                    onChange={(e) => setDate(e.target.value)} />
                    <br/>
                    <br/>

                    <label htmlFor='color'> Description: </label>
                    <input 
                    type='description'
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                    <br/>
                    <br/>

                    <label htmlFor='name'> Likes: </label>
                    <input 
                    type='text'
                    id='name'
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)} />
                    <br/>
                    <br/>

                    <button className='create-btn'> Create a post </button>
                    {error && <p className='error-val'>{error}</p>}
                </form>
            </div>
        </>     
    )
};

export default CreatePost;