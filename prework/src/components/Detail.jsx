import Add from "./Add.jsx"
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router"
import { supabase } from "./Client.jsx";
import { Link } from "react-router-dom"
/*You can easily copy - paste these import statements but should
at least be familiar with them*/
/*It might be useful to review them periodically*/

const Detail = ( ) => {
    let { state } = useLocation(); 
    /*This is to get the link stuff that was passed along. 
    Learned this in the intermediate class and thought that it was
    useful to keep here.*/

    //Set up the state stuff here for the things that need to be added.
    /*Just make sure to review how to add and delete from the table. 
    The detailed view just needs to have the information on the creator (a short description)
    along with the option to delete the user. */

    //You should review how to do the CRUD stuff in the other section.

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
            <p> Twitter: [{ state.date }] </p>
            <p> Facebook: [{ state.date }] </p>
            <br />
          
        </div>
    </>
  );
};

export default Detail;