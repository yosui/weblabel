import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors'


function ConnectWallet() {
  const { address, isConnected, chainId } = useAccount();  // ウォレットの接続状態を取得
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();


  return (
    <div className="window" style={{ maxWidth: '800px' }}>
      <div className="title-bar">
        <div className="title-bar-text">Connect Wallet (EVM only)</div>
      </div>

      <p>Address: {address ? JSON.stringify(address) : "Not connected"}</p>
      <p>Status: {isConnected ? 'Connected' : 'Not connected'}</p>

      <div className="connect-button">
        {isConnected ? (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        ) : (
          <button type="button" onClick={() => connect( { connector: injected()
          })}>
            Connect
          </button>
        )}
      </div>

      <p className="status-bar-field">ChainId: {chainId}</p>
    </div>
  );
}

export default ConnectWallet;
