import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../component/connectwallet'
import EngraveForm from '../component/engraveform';
import ContributorList from '../component/contributorlist';


function Engrave() {
  return (
    <>
    <div className="engrave">
      <div className="connect-engrave-content">
        <ConnectWallet />
        <EngraveForm />
      </div>
        <ContributorList />
    </div>
    </>
  );
}

export default Engrave;
