import React, { useState, useEffect } from "react";
import PageLayout from "../components/pageLayout";
import "../style/viewMongus.css";
import Card from "../components/cards";
const DB_key = import.meta.env.VITE_DB_KEY;
const DB_url = import.meta.env.VITE_DB_URL;
import { createClient } from '@supabase/supabase-js';
const mainLink = createClient(DB_url, DB_key);

const ViewMongus = (props) => {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPost = async () => {
            const {data} = await mainLink
              .from('Posts')
              .select()
              .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data);
        }
        fetchPost();

        setPosts(props);

        //console.log(posts[0].id);
    }, [props]);



    return (
        <div className="see-mongus">
            <PageLayout>
                <div className="see-mongus-body">
                    <h1>View Created Crewmates</h1>
                    <p>Here you can view all the Crewmates you others have have created</p>

                    <div className="crewmate-box">
                    {
                        posts && posts.length > 0 ?
                        posts.map((post) => 
                           <Card key={post.id} id={post.id} name={post.name} speed={post.speed} color={post.color}/>
                        ) : <h2>{'No Challenges Yet 😞'}</h2>
                    }
                    </div>
                </div>
            </PageLayout>
        </div>
    );
    }

export default ViewMongus;