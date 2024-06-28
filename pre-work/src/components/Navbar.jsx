import React from 'react';
import { Link } from "react-router-dom";''

const Navbar = () => (
    <div className="Navbar">
        <h1> Posts </h1>
        {/*<p> Search Bar </p>*/}
        <h2> <Link style={{ color: "White" }} to={"/"}>
            <span className="tab"></span> Home
        </Link> </h2>
        <h2> <Link style={{ color: "White" }} to={"/add"}>
            <span className="tab"></span> Add a Post
        </Link> </h2>
        <h2> <Link style={{ color: "White" }} to={"/edit"}>
            <span className="tab"></span> Edit a Post
        </Link> </h2>

    </div> 
);

const filterPosts = () => {
    
}

export default Navbar;