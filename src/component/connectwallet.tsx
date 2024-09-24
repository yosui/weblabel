import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useState, useEffect } from 'react';

function ConnectWallet() {
  const { address, isConnected, connector } = useAccount();  // ウォレットの接続状態を取得
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const getChainId = async () => {
      if (connector) {
        const chainId = await connector.getChainId();
        setChainId(chainId);
      }
    };
    getChainId();
  }, [connector]);  // connector が変更されたらチェーンIDを取得

  return (
    <div className="connect-wallet">
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
            <button type="button" onClick={() => connect({ connector: injected() })}>
              Connect
            </button>
          )}
        </div>

        <p className="status-bar-field">ChainId: {chainId || 'N/A'}</p>  {/* チェーンIDを表示 */}
      </div>
    </div>
  );
}

export default ConnectWallet;
