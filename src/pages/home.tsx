import React from 'react';
import { Link } from 'react-router-dom';
import AlbumList from '../component/albumlist';


function Home() {
  return (
    <>
      <div className="window" style={{ maxWidth: '2500px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Statement</div>
        </div>
        <div className="window-body">
          <ul>
            <li>
              Music has been open and public since ancient times. Weblabel contributes to the borderless music culture and supports artists who believe that love, respect, safety, and privacy are important for everyone.
            </li>
          </ul>
        </div>
        <div className="status-bar">
          <Link to="/about">
            <p className="status-bar-field">---About---</p>
            </Link>

          <a href="./weblabel_pages/zoo.html">
            <p className="status-bar-field">zoo</p>
          </a>
          <p className="status-bar-field">&lt;&gt;&lt;&gt;&gt;&gt;</p>
        </div>
      </div>
      <AlbumList />
    </>
  );
}

export default Home;
