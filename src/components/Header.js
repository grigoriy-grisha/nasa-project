import React from 'react';


import Navigation from "./Navigation";


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