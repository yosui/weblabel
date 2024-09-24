import React, { useState, useEffect } from 'react';
import { readContract } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { nameStoreAbi } from '../generated'; // ABIのインポート
import { config } from '../wagmi';

function ContributorList() {
  const [contributors, setContributors] = useState<string[]>([]);
  const { address } = useAccount();

  // コントラクトから保存された名前を読み取る関数
  const fetchContributorNames = async () => {
    if (!address) {
      console.log('ウォレットが接続されていません');
      return;
    }

    try {
      const names = await readContract(config, {
        address: '0x21DAe579bD966EA6c406f23A42bcDC2b18506CFa', // コントラクトアドレス
        abi: nameStoreAbi,  // コントラクトのABI
        functionName: 'names',  // 読み取る関数
        args: [address],  // コントラクトに渡す引数としてウォレットアドレスを渡す
      });

      // 名前が既に含まれていないか確認してから追加
      if (names && !contributors.includes(names as string)) {
        setContributors([names as string]); // 新しいリストとして設定
      }
    } catch (error) {
      console.error('Error fetching contributor names:', error);
    }
  };

  // useEffectでコントラクトからデータを読み取る
  useEffect(() => {
    if (address) {
      fetchContributorNames();
    }
  }, [address]);

  return (
    <div className="window" style={{ maxWidth: '800px' }}>
      <div className="title-bar">
        <div className="title-bar-text">Contributors</div>
      </div>

      <div className="contributor-list">
        {contributors.map((contributor, index) => (
          <div className="contributor" key={index}>
            <p>{contributor}, </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributorList;
