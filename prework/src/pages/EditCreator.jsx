import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ReadPost from './ViewCreator.jsx'
import { supabase } from '../components/Client.jsx'

const EditPost = () => {
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState(0);
    const [color, setColor] = useState("plum");
    const [error, setError] = useState(null);
    const [post, setPost] = useState({id: 0, name: "", title: "", date: ""});
    const [id, setId] = useState(0);

    const updatePost = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase 
            .from("Posts")
            .update({ title: post.name, created_at: post.date })
            .eq('id', post.id)

        if (error) {
            setError("Need to enter information.");
        }
        
        if (data) {
            console.log(data);
            setError(null);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .delete()
          .eq('id', post.id); 
      
        window.location = "http://localhost:5173/";
    }

    return (
        <>
            <div>
                <form className='forms'>
                    <label htmlFor='id'> Post Id: </label>
                    <input 
                    type='text'
                    id='id'
                    name='id'
                    value={post.id}
                    onChange={handleChange} />
                    <br/>
                    <br/>

                    <label htmlFor='name'> Name: </label>
                    <input 
                    type='text'
                    id='title'
                    name='name'
                    value={post.name}
                    onChange={handleChange} />
                    <br/>
                    <br/>

                    <label htmlFor='date'> Date: </label>
                    <input 
                    type='description'
                    id='description'
                    name='date'
                    value={post.date}
                    onChange={handleChange} />
                    <br/>
                    <br/>
                    
                    <label htmlFor="red">Red</label><br />
                    <input type="radio" id="red" name="color" value="red" onChange={handleChange} /><br />

                    <input className="inputs" type="submit" value="Edit a Creator" onClick={updatePost}/>
                    <input className="inputs" type="submit" value="Delete a Creator" onClick={deletePost}/>
                </form>
            </div>     
        </>     
    )

};

export default EditPost;