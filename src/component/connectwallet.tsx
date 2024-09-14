import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Connectwallet() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        status: {account.status}
        <br />
        addresses: {JSON.stringify(account.addresses)}
        <br />
        chainId: {account.chainId}
      </div>

      {account.status === 'connected' && (
        <button type="button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.id} // uidをidに修正。通常、idが使われます
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default Connectwallet;
