import React from "react";
import PageLayout from "../components/pageLayout";
import "../style/homepage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            <PageLayout>
                <div className="home-page-body">
                    <h1>Welcome to the Among Us Crewmate Creator</h1>
                    <p>Here you can create your own custom crewmate and view other crewmates created by other users.</p>
                </div>
            </PageLayout>
        </div>
    );
}

export default HomePage;