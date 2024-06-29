import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from './Client.jsx'
import Detail from './Detail.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Add = ( {creators} ) => {
    const [create, setCreate] = useState(creators);

    {/*This add is used to render the table on the 
    front page. I might need to fix the state variable's name
    that is above. */}

    return (
        <>
            <h2> 
            {/* The comments with the state that is added 
            so that we can keep track of the information.*/}
            <Link style={{ color: "white" }} to={`/detail/:${create.id}`}
            state={ {id: create.id, name: create.name, url: create.url, 
            image_url: create.image_url, description: create.description}}>
            
            {/* We have a span class and also the information that is rendered to
            the front page of the Creator. */}
                <span className="tab"> 
                <p> Creator Id: { create.id } </p>
                <p> Name: { create.name } </p>
                <p> Description: { create.description } </p>
                </span> 
            </Link> 
            </h2>

        </>
    )
};

export default Add;