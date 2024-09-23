import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { parseEther } from 'ethers/utils';  // ETHをweiに変換するために利用
import { useWriteNameStoreStoreName } from '../generated';  // 正しい関数をインポート

function EngraveForm() {
  const [name, setName] = useState('');  // 名前の入力状態
  const [ethAmount, setEthAmount] = useState(0);  // ETH額の入力状態
  const { isConnected } = useAccount();  // ウォレットの接続状態を取得

  const [isLoading, setIsLoading] = useState(false);  // ローディング状態
  const [isSuccess, setIsSuccess] = useState(false);  // 成功状態
  const [errorMessage, setErrorMessage] = useState('');  // エラーメッセージ

  const { writeContractAsync } = useWriteNameStoreStoreName();

  const handleEngrave = async () => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setErrorMessage('');

      if (!isConnected) {
        alert('Please connect wallet.');
        setIsLoading(false);
        return;
      }

      if (ethAmount < 0.01) {
        alert('Minimum donation amount is 0.01 ETH');
        setIsLoading(false);
        return;
      }

      if (window.confirm(`Engrave this name?: ${name}`)) {
        await writeContractAsync({
          address: "0x539Aa23439FB6aEE08cB0FF2e82d127951f5aC22", // contract address here
          value: parseEther(ethAmount.toString()),
          args: [name]
        });  // トランザクションの送信
        setIsSuccess(true);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Error engraving name');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="window" style={{ maxWidth: '800px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Connect Wallet (EVM only)</div>
        </div>

        <p>Engrave your name for smart contract as a contributor permanently.</p>
        
        <div className="field-row-stacked" style={{ width: '200px' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}  // 名前の入力を追跡
          />
        </div>
        
        <div className="field-row-stacked" style={{ width: '200px' }}>
          <label htmlFor="ethAmount">Donated ETH Amount (0.01~): </label>
          <input
            id="ethAmount"
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(Number(e.target.value))}  // ETH額の入力を追跡
          />
        </div>

        <button
          onClick={handleEngrave}
          disabled={isLoading}  // トランザクションが進行中の場合、ボタンを無効化
        >
          {isLoading ? 'Engraving...' : 'Engrave'}
        </button>

        {isSuccess && <p>Successfully engraved the name!</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default EngraveForm;
