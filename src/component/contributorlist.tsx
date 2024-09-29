import React, { useState, useEffect } from 'react';
import { readContract } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { nameStoreAbi } from '../generated'; // ABIのインポート
import { config } from '../wagmi';

function ContributorList() {
  const [contributors, setContributors] = useState<string[]>([]);
  const { address } = useAccount();

  // コントラクトから保存されたすべての名前を読み取る関数
  const fetchContributorNames = async () => {
    if (!address) {
      console.log('Please connect wallet');
      return;
    }

    try {
      const names = await readContract(config, {
        address: '0x21DAe579bD966EA6c406f23A42bcDC2b18506CFa', // コントラクトアドレス
        abi: nameStoreAbi,  // コントラクトのABI
        functionName: 'getAllNames',  // すべての名前を取得する関数
      });

      // 取得した名前を配列として状態に設定
      if (names) {
        setContributors(names as string[]); // 配列として設定
      }
    } catch (error) {
      console.error('Error fetching all contributor names:', error);
    }
  };

  // useEffectでコントラクトからデータを読み取る
  useEffect(() => {
    fetchContributorNames();
  }, [address]);

  return (
    <div className="window" style={{ maxWidth: '4000px' }}>
      <div className="title-bar">
        <div className="title-bar-text">Contributors (contract address: 0x21DAe579bD966EA6c406f23A42bcDC2b18506CFa)
          </div>
      </div>

      <div className="contributor-list">
        {contributors.map((contributor, index) => (
          <div className="contributor" key={index}>
            <p>{contributor},　</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributorList;
