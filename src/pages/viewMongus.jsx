import React from "react";
import PageLayout from "../components/pageLayout";
import "../style/viewMongus.css";

const ViewMongus = () => {
    return (
        <div className="see-mongus">
            <PageLayout>
                <div className="see-mongus-body">
                    <h1>View Created Crewmates</h1>
                    <p>Here you can view all the Crewmates you others have have created</p>
                </div>
            </PageLayout>
        </div>
    );
    }

export default ViewMongus;