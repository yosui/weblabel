import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../component/connectwallet'
import EngraveForm from '../component/engraveform';
import ContributorList from '../component/contributorlist';


function Engrave() {
  return (
    <>
      <div className="connect-engrave-content">
        <ConnectWallet />
        <EngraveForm />
      </div>
        <ContributorList />
      



    </>
  );
}

export default Engrave;
