import React, {useState, useEffect} from "react";
import PageLayout from "../components/pageLayout";
import "../style/aMongus.css";
const DB_key = import.meta.env.VITE_DB_KEY;
const DB_url = import.meta.env.VITE_DB_URL;
import { createClient } from '@supabase/supabase-js';
const mainLink = createClient(DB_url, DB_key);
import { useParams, Link } from 'react-router-dom';
import Red from '../components/image/Red.webp'
import Blue from '../components/image/Blue.webp'
import Yellow from '../components/image/Yellow.webp'
import Black from '../components/image/Black.webp'
import Orange from '../components/image/Orange.webp'
import White from '../components/image/White.webp'
import Pink from '../components/image/Pink.webp'
import Green from '../components/image/Green.webp'

const colorImages = {
    Red,
    Blue,
    Yellow,
    Black,
    Orange,
    White,
    Pink,
    Green
};

function AMongus() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await mainLink
              .from('Posts')
              .select()
              .order('created_at', { ascending: true });
    
            // Find the index of the post with the matching id
            let index;
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === Number(id)) {
                    console.log(id);
                    index = i;
                    break;
                }
            }
            //console.log(data);
            // Set the state with the found post
            if (index !== undefined) {
                setData(data[index]);
                setImg(colorImages[data[index].color]);
            }
        }
        fetchData();
        //console.log(data);
    }, []);

    const deletePost = async (event) => {
        event.preventDefault();

        await mainLink
            .from('Posts')
            .delete()
            .eq('id', id);
    
        window.location = "http://localhost:5173/crewmates";
    }

    const editPost = async (event) => {
        event.preventDefault();
        window.location = "http://localhost:5173/edit/" + id;
    }

    return (
        <div>
            <PageLayout>
                <div className="aMongus-body">
                    <h1>This Crewmate's name is: {data.name}</h1>
                    <p></p>
                    <img className="Crewmate" src= {img}alt="Crewmate" />
                    <br />
                    <h1>Crewmates stats:</h1>
                    <div className="crewmate-box">
                        
                        <h2>Speed: {data.speed} mph</h2>
                        <h2>Color: {data.color}</h2>
                    </div>
                    <p>{data.speed >= 250 ? 'This crewmate is fast maybe a bit to fast, kind of sus' :
                    data.speed >= 100 ? 'Wow, your really fast, your going to be good at doing tasks nice' : `Your really slow y'all be luck to survive` } </p>
                    <div className="crewmate-box">
                        <button className="edit-button" onClick={editPost}>Edit</button>
                        <button className="delete-button" onClick={deletePost}>Delete</button>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
}

export default AMongus;