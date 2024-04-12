import React from "react";
import '../style/navBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
            <img src="https://media4.giphy.com/media/RtSfNhYf9dQrvDkgQZ/giphy.gif?cid=6c09b952jpd4x9bipio5j11b907l9oclrikb3f0odzdbi7g2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="logo" />
            </div>
            <div className="navbar__menu">
                <Link to="/" className="navbar__menu-item">Home</Link>
                <Link to="/crewmate-creator" className="navbar__menu-item">Create Crewmate</Link>
                <Link to="/veiw" className="navbar__menu-item">View Crewmates</Link>
            </div>
        </div>
    );
}

export default NavBar;