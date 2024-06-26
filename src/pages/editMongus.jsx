import React from "react";
import { useState } from "react";
import PageLayout from "../components/pageLayout";
import "../style/editMongus.css";
const DB_key = import.meta.env.VITE_DB_KEY;
const DB_url = import.meta.env.VITE_DB_URL;
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'react-router-dom';

const EditMongus = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [post, setPost] = useState({name: "", speed: ""});
    const mainLink = createClient(DB_url, DB_key);
    const {id} = useParams();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const handleColorClick = (event) => {
        setSelectedColor(event.target.value);
    }

    const saveValue = async (event) => {
        event.preventDefault();
        
        if (!Number.isInteger(Number(post.speed)) || post.speed === "") {
            alert('Speed must be an Number!');
            return;
        }

        await mainLink
            .from('Posts')
            .update({name: post.name, speed: post.speed, color: selectedColor})
            .eq ('id', id);

        window.location = "/crewmates";
    }

    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'Orange', 'White', 'Pink'];
    return (
    <div className="eMongus">
        <PageLayout>
        <div className="edit-mongus-body">
                    <h1>Create Your Own Crewmate</h1>
                    <p>Use the form below to create your own crewmate</p>
                    <div className="form-box">
                        <div className="textBox">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value = {post.name} onChange={handleChange} />
                            <label htmlFor="Speed">Speed:</label>
                            <input type="text" id="speed" name="speed" value = {post.author} onChange={handleChange}/>
                        </div>

                        <div className="color-choice">
                            <label htmlFor="color">Color:</label>
                            {colors && colors.map((color) => (
                                <li key={color}>
                                    <input 
                                        id={color} 
                                        value={color} 
                                        type="radio" 
                                        onChange={handleColorClick}
                                        checked={selectedColor === color}
                                    />
                                    {color}
                                </li>
                            ))}
                        </div>
                        <button type="submit" onClick={ saveValue }>Create Crewmate</button>
                    </div>
                </div>
        </PageLayout>
    </div>
    )
}

export default EditMongus;