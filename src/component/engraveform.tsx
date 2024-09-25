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
          address: "0x21DAe579bD966EA6c406f23A42bcDC2b18506CFa", // contract address here
          value: parseEther(ethAmount.toString()),
          args: [name],
        });  // トランザクションの送信
        setIsSuccess(true);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Error engraving name');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (newName.length <= 30) {
      setName(newName);
    } else {
      alert('Name cannot exceed 30 characters');
    }
  };

  return (
    <>
    <div className="engrave-form">
      <div className="window" style={{ maxWidth: '800px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Engrave your name permanently</div>
        </div>


      <div className="engrave-form-content">
        <p>Engrave your name for smart contract as a contributor permanently.(1 address, 1 name)</p>
        
        <div className="field-row-stacked" style={{ width: '200px' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}  // 名前の入力を追跡、30文字以上を禁止
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

        <button className="engrave-button"
          onClick={handleEngrave}
          disabled={isLoading}  // トランザクションが進行中の場合、ボタンを無効化
        >
          {isLoading ? 'Engraving...' : 'Engrave'}
        </button>

        {isSuccess && <p>Successfully engraved the name!</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        </div>
      </div>
      </div>
    </>
  );
}

export default EngraveForm;
