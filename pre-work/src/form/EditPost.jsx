import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ReadPost from './ReadPost'
import { supabase } from '../components/Client.jsx'

const EditPost = () => {
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState(0);
    const [color, setColor] = useState("plum");
    const [error, setError] = useState(null);
    const [post, setPost] = useState({id: 0, name: "", title: "", date: ""});
    const [id, setId] = useState(0);

    //let link = useParams();

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

                    {/*<label htmlFor="id"> Post Id </label> <br />
                    <input type="text" id="id" name="id" value={post.id} onChange={handleChange} /><br />
                    
                    <label htmlFor="name"> Name </label> <br />
                    <input type="text" id="name" name="name" value={post.title} onChange={handleChange} /><br />
                    <br/>
                    
                    <label htmlFor="speed"> Date </label><br />
                    <input type="text" id="speed" name="speed" value={post.date} onChange={handleChange} /><br />
                    <br/>*/}
                    
                    <label htmlFor="red">Red</label><br />
                    <input type="radio" id="red" name="color" value="red" onChange={handleChange} /><br />
                    
                    <label htmlFor="blue">Blue</label><br />
                    <input type="radio" id="blue" name="color" value="blue" onChange={handleChange} /><br />
                    
                    <label htmlFor="green">Green</label><br />
                    <input type="radio" id="green" name="color" value="green" onChange={handleChange} /><br />
                    
                    <label htmlFor="yellow">Yellow</label><br />
                    <input type="radio" id="yellow" name="color" value="yellow" onChange={handleChange} /><br />
                    
                    <label htmlFor="orange">Orange</label><br />
                    <input type="radio" id="orange" name="color" value="orange" onChange={handleChange} /><br />
                    
                    <label htmlFor="plum">Plum</label><br />
                    <input type="radio" id="plum" name="color" value="plum" onChange={handleChange} /><br />
                    
                    <label htmlFor="fuchsia">Fuchsia</label><br />
                    <input type="radio" id="fuchsia" name="color" value="fuchsia" onChange={handleChange} /><br />
                    
                    <label htmlFor="gold_rod">Golden Rod</label><br />
                    <input type="radio" id="gold_rod" name="color" value="gold_rod" onChange={handleChange} /><br />
                    <br/>

                    <input className="inputs" type="submit" value="Edit a Post" onClick={updatePost}/>
                    <input className="inputs" type="submit" value="Delete a Post" onClick={deletePost}/>
                </form>
            </div>     
        </>     
    )

};

export default EditPost;