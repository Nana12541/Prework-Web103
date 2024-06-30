import React from 'react';
import { Link } from "react-router-dom";''

const Navbar = () => (
    <div className="Navbar">
        <h2> Creator Verse </h2>
        
        <h2> 
            <Link style={{ color: "White" }} to={"/"}>
                <span className="tab"></span> Home
            </Link> 
        </h2>
        
        <h2>
            <Link style={{ color: "White "}} to={'/add'}>
                <span classname="tab"></span> AddCreator
            </Link>
        </h2>

        <h2>
            <Link style={{ color: "White "}} to={'/edit'}>
                <span classname="tab"></span> EditCreator
            </Link>
        </h2>

    </div> 
);

export default Navbar; //Make sure that this line is here.