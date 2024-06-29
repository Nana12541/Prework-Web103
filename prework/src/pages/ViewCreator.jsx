import React, { useState, useEffect } from 'react';
import Add from '../components/Add.jsx';
import { supabase } from '../components/Client.jsx'

const ViewCreator = () => {
    const [isError, setIsError] = useState(null);
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        // READ all creators from table
        const getCreator = async () => {
            const { data , error } = await supabase
            .from('Creators')
            .select()
           
            // set state of creators
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
                <p class="text"> The list of creators: </p>
                {creators && (
                    <div className='container'>
                            {creators.map(creators => (
                                    <div className={`members`}>
                                        <Add key={creators.id} creators={creators} />
                                    </div>
                                    //We map everything and set it here.
                            ))}
                    </div>
                )}
            </div>
        </>
    )

}

export default ViewCreator;