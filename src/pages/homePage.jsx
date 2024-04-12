import React from "react";
import PageLayout from "../components/pageLayout";
import "../style/homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const history = useNavigate();
    const handleClick = () => {
        history.push("/crewmate-creator");
    }

    return (
        <div className="home-page">
            <PageLayout>
                <div className="home-page-body">
                    <h1>Welcome to the Among Us Crewmate Creator</h1>
                    <p>Here you can create your own custom crewmate and view other crewmates as well as send them off into space click on the crewmates to get started!!!</p>
                    <div className="mongus">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4da35b00-9686-4c96-826d-6ee7550a5539/de5o9qp-4dae339c-a537-4cc4-bc40-3dc87c03bd31.png" 
                        alt="crewmate"
                        onClick={handleClick} 
                        />
                    </div>
                </div>
            </PageLayout>
        </div>
    );
}

export default HomePage;