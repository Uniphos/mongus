import React, { useState } from "react";
import PageLayout from "../components/pageLayout";
import "../style/createMongus.css";

const CreateMongus = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (event) => {
        setSelectedColor(event.target.value);
    }

    const saveValue = () => {
        console.log(selectedColor);
    }
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'orange', 'white', 'pink']; // Add more colors as needed

    return (
        <div className="create-mongus">
            <PageLayout>
                <div className="create-mongus-body">
                    <h1>Create Your Own Crewmate</h1>
                    <p>Use the form below to create your own crewmate</p>
                    <div className="form-box">
                        <div className="textBox">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <label htmlFor="Speed">Speed:</label>
                            <input type="text" id="color" name="color" />
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
    );
}

export default CreateMongus;