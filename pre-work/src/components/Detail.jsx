import Add from "./Add.jsx"
import Comments from "./Comments.jsx"
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import { supabase } from './Client.jsx'

const Detail = ( ) => {
    let { state } = useLocation();
    let link = "";
    //console.log(state);
    const [color, setColor] = useState("red"); //state.color
    const [likes, setLikes] = useState(state.likes);
    const [id, setId] = useState(state.id);
    const [comments, setComments] = useState(state.comments);
    const [userInput, setUserInput] = useState("");
    let list;
    let newList;

    const linkFunction = () => {
        if (color == "red") {
            link = "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        } else if (color == "blue") {
            link = "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        }  else if (color == "green") {
            link = "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        }   else if (color == "yellow") {
            link = "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        }  else if (color == "orange") {
            link = "https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        }  else if (color == "plum") {
            link = "https://images.pexels.com/photos/12634278/pexels-photo-12634278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        } else if (color == "fuchsia") {
            link = "https://images.pexels.com/photos/17832661/pexels-photo-17832661/free-photo-of-purple-sports-car-on-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        } else if (color == "gold_rod") {
            link = "https://images.pexels.com/photos/12281630/pexels-photo-12281630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
        }
        return link;
    }

    const incrementLikes = async (event) => {
        event.preventDefault();
    
        setLikes(likes + 1);
        await supabase
          .from('Posts')
          .update({ likes: likes + 1 })
          .eq('id', state.id) //Use State id
        //state.likes = likes;
    }

    const deleteComment = (comment) => {
        list = comments.filter((value) => value != comment);
        if (comments.length > 1) {
            setComments(list);
        } else {
            setComments([]);
        }
        let e = new Event("click");
        deleteFromTable(e);
    }

    const deleteFromTable = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .update({ comments: list })
          .eq('id', state.id)
      
        window.location = "http://localhost:5173/";
    }

    const add = (val) => {
        setUserInput(val);
        let e = new Event("add");
        addComment(e)
    }

    const addComment = async (event) => {
        event.preventDefault();
        let array = [... comments];
        array.push(userInput);
        setComments(array);
        //console.log(userInput);
      
        await supabase
          .from('Posts')
          .update({ comments: array })
          .eq('id', state.id)
      
        window.location = "http://localhost:5173/";
    }

    /*
    const edit = (val, comment) => {
        let list = [... comments];
        let index = comments.indexOf(comment);
        list[index] = val;
        setComments(list);
        let e = new Event("update");
        //updateFromTable(e);
    }

    const updateFromTable = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .update({ comments: list })
          .eq('id', state.id)
      
        window.location = "http://localhost:5173/";
    }

    const add = (val) => {
        newList = comments.push(val);
        setComments(newList);
        console.log(comments);
        let e = new Event("add");
        addtoTable(e);
    }

    const addtoTable = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .update({ comments: comments })
          .eq('id', state.id)
      
       window.location = "http://localhost:5173/";
    }*/

    // <div className={`detail ${state.color}`}>
   
    return (
    <>
        <div className={`detail red`}>
            <p> Title of your post: [{ state.title }]. </p>
            <p> Post Id: [{ state.id }]. </p>
            <br />
            <img width="100px" height="80px" src={linkFunction()}></img>
            <br></ br>
            <p> The date of your post: [{ state.date }]. </p>
            <br />
            <p> The number of likes: [{ likes }]. </p>
            <button onClick={incrementLikes}> Like Post </button>
            <br />
          
        </div>
        <p> Add Some Comments Below: </p>
        {state.comments.map((comment) => <p className="comments"> { comment } 
        <input type="text" id="id" name="id" onChange={(val) => edit(val.target.value, comment)} />
        <button onClick={() => {deleteComment(comment)}}> Delete </button> </p>)}
        <p> Add a comment </p>
        <input type="text" name="name" onChange={(val) => setUserInput(val.target.value)}></input>
        <button type="submit" onClick={() => add(userInput)}> Submit </button>
        {/*<input onSubmit={(val) => add(val.target.value)}> New Comment </input>
       <Comments crewmember={state}/>*/}
    </>
  );
};

export default Detail;