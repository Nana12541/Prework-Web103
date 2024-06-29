import { useState } from 'react'
import './App.css'
import ViewCreator from './pages/ViewCreator'
import { Link } from "react-router-dom";
import Gallery from './components/Gallery';
import { supabase } from './components/Client.jsx';

function App() {

  return (
    <>
      <Link style={{ color: "White" }} to={"/add"}>
            <span className="tab"></span>
      </Link> 
      <Gallery />
    </>
  )
}

export default App
