import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
        <div className="title-bar">
            <div className="title-bar-text">Weblabel</div>
            <div className="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
        
        <Link to="/">
        <img src="../assets/image/weblabel.svg" alt="Good vibes only" className="logo" />
        </Link>
    </>
  );
}

export default Header;
