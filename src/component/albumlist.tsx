import React from 'react';
import AlbumCard from './albumcard';
import AlbumInfos from '../data/albuminfo'

// 親コンポーネント
function AlbumList() {

  return (
    <div>
        <AlbumCard 
            name={AlbumInfos[0].name}
            artist={AlbumInfos[0].artist}
            image={AlbumInfos[0].image} 
        />

        
    </div>
  );
}

export default AlbumList;