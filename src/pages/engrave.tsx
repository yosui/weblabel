import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../component/connectwallet'


function Engrave() {
  return (
    <>
      <div className="window" style={{ maxWidth: '2500px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Message</div>
        </div>
        <div className="window-body">
          <ul>
            <li>
                Engrave your name for smart contract as a contributor.
            </li>
          </ul>
        </div>
      </div>


        <ConnectWallet />



    </>
  );
}

export default Engrave;
