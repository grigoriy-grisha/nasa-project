import React from 'react';


import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";


function Header() {


    return (
        <header className="header">
            <div className="logo">
                <span>asgseta</span>
            </div>
            <nav>
                <Navigation  items={['home','apod','mars']}/>
            </nav>
        </header>
    )
}

export default Header;