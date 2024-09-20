import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function ConnectWallet() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>

    <div className="window" style={{ maxWidth: '320px' }}>

    <div className="title-bar">
      <div className="title-bar-text">Connect Wallet</div>
    </div>



        <p>Address: {JSON.stringify(account.addresses)}</p>
        <p>Status: {account.status}</p>


    <div className="window-body">
    <p> Select wallet:</p>
      <ul>    
          {connectors.map((connector) => (
          <li className="select-wallet"
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </li>    
        ))}
       </ul>
       </div>

      
      <div className='connect-button'>
        {account.status === 'connected' && (
        <button type="button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
      </div>

      <div className='status-ver'>
      <p className="status-bar-field">ChainId: {account.chainId}</p>
      <p className="status-bar-field">Message: {error?.message}</p>

      </div>
      
      
      
      
      
      
      </div>


    </>
  );
}

export default ConnectWallet;
