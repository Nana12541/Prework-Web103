import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ViewCreator from './ViewCreator.jsx'
import { supabase } from '../components/Client.jsx'

const EditCreator = () => {
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState(0);
    const [color, setColor] = useState("plum");
    const [error, setError] = useState(null);
    const [creator, setCreator] = useState({id: 0, name: "", url: "", image_url: "", description: ""});
    const [id, setId] = useState(0);

    const updateCreator = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase 
            .from("Creators")
            .update({ name: creator.name, url: creator.url, 
            image_url: creator.image_url, description: creator.description })
            .eq('id', creator.id)

        if (error) {
            setError("Need to enter information.");
        }
        
        if (data) {
            console.log(data);
            setError(null);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Creators')
          .delete()
          .eq('id', creator.id); 
      
        window.location = "http://localhost:5173/";
    }

    return (
        <>
            <div>
                <form className='forms'>
                    <label htmlFor='id'> Post Id: </label>
                    <input type='text' id='id' name='id' value={creator.id}
                    onChange={handleChange} /> <br/> <br/>

                    <label htmlFor='name'> Name: </label>
                    <input type='text' id='name' name='name' value={creator.name} 
                    onChange={handleChange} /> <br/> <br/>

                    <label htmlFor='date'> Url: </label>
                    <input type='text' id='description' name='url' value={creator.url}
                    onChange={handleChange} /> <br/> <br/>

                    <label htmlFor='date'> ImageUrl: </label>
                    <input type='text' id='description' name='image_url' value={creator.image_url}
                    onChange={handleChange} /> <br/> <br/>

                    <label htmlFor='date'> Description: </label>
                    <input type='description' id='description' name='description' value={creator.descrition}
                    onChange={handleChange} /> <br/> <br/>
                    
                    <label htmlFor="red">Red</label><br />
                    <input type="radio" id="red" name="color" value="red" onChange={handleChange} /><br />

                    <input className="inputs" type="submit" value="Edit a Creator" onClick={updateCreator}/>
                    <input className="inputs" type="submit" value="Delete a Creator" onClick={deleteCreator}/>
                </form>
            </div>     
        </>     
    )

};

export default EditCreator;