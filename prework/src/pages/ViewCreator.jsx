import React, { useState, useEffect } from 'react';
import Add from '../components/Add.jsx';
import { supabase } from '../components/Client.jsx'

const ReadPost = () => {
    const [isError, setIsError] = useState(null);
    const [creators, setCreators] = useState(null);

    useEffect(() => {
        // READ all post from table
        const getCreator = async () => {
            const { data , error } = await supabase
            .from('Posts')
            .select()
            // set state of posts
            if (error) {
                //Check if there is an error with accessing the information.
                setIsError(" Error ");
                setCreators(null);
                console.log(error);
            }
            if (data) {
                //If there is a result, then set the information.
                setCreators(data);
                setIsError(null);
            }
        }
        getCreator();
    }, []); //Add props to the dependency array

    return (
        <>
            <div>
                <p class="text"> Text goes here</p>
                {creators && (
                    <div className='container'>
                            {creators.map(post => (
                                    <div className={`members`}>
                                        <Add key={post.id} post={post} />
                                    </div>
                                    //We map everything and set it here.
                            ))}
                    </div>
                )}
            </div>
        </>
    )

}

export default ReadPost;