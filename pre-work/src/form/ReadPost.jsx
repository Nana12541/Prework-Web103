import React, { useState, useEffect } from 'react';
import Add from '../components/Add';
import { supabase } from '../components/Client.jsx'

const ReadPost = () => {
    const [text, setText] = useState("");
    const [isError, setIsError] = useState(null);
    const [posts, setPosts] = useState(null);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    let index = 0;

    useEffect(() => {
        // READ all post from table
        const getPost = async () => {
            const { data , error } = await supabase
            .from('Posts')
            .select()
            // set state of posts
            if (error) {
                setIsError(" Error ");
                setPosts(null);
                console.log(error);
            }
            if (data) {
                setPosts(data);
                setFilteredResults(data);
                setIsError(null);
            }
        }
        getPost();
    }, []); //Add props to the dependency array

    const newest = async () => {
        const {data} = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: false })
    
        // set state of posts
        setPosts(data);
        setFilteredResults(data);
    }
    
      const popular = async () => {
        const {data} = await supabase
        .from('Posts')
        .select()
        .order('likes', { ascending: false })
    
        // set state of posts
        setPosts(data);
        setFilteredResults(data);
    }

    const filterPosts = (searchVal) => {
        setSearchInput(searchVal);
        if (searchInput !== "") {
            const filteredPosts = posts.filter((value) => value.title.includes(searchVal));
            setFilteredResults(filteredPosts);
        } else {
            setFilteredResults(posts);
        }
    }

    return (
        <>
            <div>
            <input type="text" placeholder="Search" className='search' 
            onChange={(inputString) => filterPosts(inputString.target.value)}></input>
                <button className='buttons' onClick={newest}> Newest </button>
                <button className='buttons' onClick={popular}> Most Popular </button>
                {isError && (<p> {isError} </p>)}
                {filteredResults && (
                    <div className='container'>
                            {filteredResults.map(post => (
                                    <div className={`members ${post.color}`}>
                                        <Add key={post.id} post={post} />
                                    </div>
                            ))}
                    </div>
            )}
            </div>
        </>
    )

}

export default ReadPost;