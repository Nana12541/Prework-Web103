import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from './Client.jsx'
import Detail from './Detail.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Add = ( {post} ) => {
    const [crew, setCrew] = useState(post);
    {/*This add is used to render the table on the 
    front page. I might need to fix the state variable's name
    that is above. */}

    return (
        <>
            <h2> 
            
            {/* The comments with the state that is added 
            so that we can keep track of the information.*/}
            <Link style={{ color: "white" }}
            to={`/detail/:${post.id}`} 
            state={ {id: post.id, date: post.created_at, title: post.title, 
            description: post.description}}>
            
                {/* We have a span class and also the information that is rendered to
            the front page of the Creator. */}
                <span className="tab"> 
                <p> Post Id: {post.id} </p>
                <p> Question: {post.title} </p>
                <p> Post Date: {post.created_at} </p>
                </span> 
            
            </Link> 
            
            </h2>

        </>
    )
};

export default Add;