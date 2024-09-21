import React, { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';

function EngraveForm() {
  const [name, setName] = useState('');  // 名前の入力状態
  const [ethAmount, setEthAmount] = useState(0);  // ETH額の入力状態
  const { address, isConnected } = useAccount();  // ウォレットのステートを取得
  
  const { writeContract } = useWriteContract();

  return (
    <>
    <div className="window" style={{ maxWidth: '800px' }}>
    <div className="title-bar">
      <div className="title-bar-text">Connect Wallet(EVM only)</div>
    </div>

    <p>Engrave your name for smart contract as a contributor permanently.
    </p>
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
        onClick={() => {
          if (!isConnected) {
            alert('Please connect wallet.');
            return;
          }

          if (ethAmount < 0.01) {
            alert('Minimum donation amount is 0.01 ETH');
            return;
          }

          if (window.confirm(`Engrave this name？: ${name}`)) {
            writeContract({
              address: '0xYourContractAddress',  // スマートコントラクトのアドレス
              abi: [
                {
                  "inputs": [
                    {
                      "internalType": "string",
                      "name": "_name",
                      "type": "string"
                    }
                  ],
                  "name": "engraveName",
                  "outputs": [],
                  "stateMutability": "payable",
                  "type": "function"
                }
              ],
              functionName: 'engraveName',
              args: [name],
              overrides: {
                value: ethers.utils.parseEther(ethAmount.toString()),  // ETH額をweiに変換
              },
            });
          }
        }}
      >
        Engrave
      </button>
    </div>
    </>
  );
}

export default EngraveForm;
