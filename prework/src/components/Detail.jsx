import Add from "./Add.jsx"
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router"
import { supabase } from "./Client.jsx";
import { Link } from "react-router-dom"

const Detail = ( ) => {
    let { state } = useLocation(); 
    
    return (
    <>
        <div className={`detail blue`}>
            <p> Creator Name: [{ state.name }]. </p>
            <p> Creator Id: [{ state.id }]. </p>
            <br />
            <br></ br>
            <img width= "375px" height="300px" src={state.image_url} ></img> {/*Add the image here*/}
            <p> Creator Description: { state.description }. </p>
            <Link to={ state.url }> 🎖 YouTube Channel 🎖 </Link>
            <br />
          
        </div>
    </>
  );
};

export default Detail;