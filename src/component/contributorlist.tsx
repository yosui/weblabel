import React, { useState, useEffect } from 'react';
import { watchContractEvent } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { nameStoreAbi } from '../generated'; // ABIのインポート
import { config } from '../wagmi';

function ContributorList() {
  const [contributors, setContributors] = useState<string[]>([]);
  const { address } = useAccount();

  // イベントが発生したときの処理を行う関数
  const handleEvent = (event: any) => {
    const newContributor = event.args.name;
    setContributors((prevContributors) => [...prevContributors, newContributor]);
  };

  // コントラクトのイベントを監視する関数
  const startWatchingEvent = () => {
    const unwatch = watchContractEvent(config,{
      address: '0x539Aa23439FB6aEE08cB0FF2e82d127951f5aC22',
      abi: nameStoreAbi,
      eventName: 'NameStored',
    }, handleEvent);

    return unwatch;
  };

  // useEffectでイベントの監視を設定し、クリーンアップを行う
  useEffect(() => {
    const unwatch = startWatchingEvent();
    return () => unwatch();  // クリーンアップ処理
  }, [config]);

  return (
    <div className="window" style={{ maxWidth: '800px' }}>
      <div className="title-bar">
        <div className="title-bar-text">Contributors</div>
      </div>

      <p>Description about Contributors</p>
      <div className="contributor-list">
        {contributors.map((contributor, index) => (
          <div className="contributor" key={index}>
            <p style={{ color: '#2c3e50', fontWeight: 'bold' }}>{contributor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributorList;
