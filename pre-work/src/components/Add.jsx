import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { supabase } from './Client.jsx'
import Detail from './Detail.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const Add = ( {post} ) => {
    const [count, setCount] = useState(post.likes);
    const [crew, setCrew] = useState(post);

    return (
        <>
            {/*<p> Speed: {crewmember.speed} </p>
            <p> Color: {crewmember.color} </p> */}
            <h2> <Link style={{ color: "white" }}
            to={`/detail/:${post.id}`} state={ {id: post.id, date: post.created_at, title: post.title, 
            description: post.description, likes: post.likes, comments: post.comments}}>
            <span className="tab"> 
            <p> Post Id: {post.id} </p>
            <p> Question: {post.title} </p>
            <p> Post Date: {post.created_at} </p>
            {/*<button className="likes" onClick={updateCount}> Likes: {count} </button>*/}
            <p> Post Likes: {post.likes} </p>
            </span> 
            </Link> </h2>

        </>
    )
};

export default Add;