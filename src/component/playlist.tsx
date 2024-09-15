import React from 'react';
import AlbumInfos from '../data/albuminfo';
import Play from './play';

function Playlist({ albumName }: { albumName: string }) {
  // AlbumInfosから指定したアルバム名でアルバムを取得
  const album = AlbumInfos.find(album => album.name === albumName);

  if (!album) {
    return <p>Album not found</p>;
  }

  return (
      <ul>
        {album.tracks.slice(0, 5).map((track, index) => (
          <li key={index}>
            {/* トラック名の表示 */}
            <p>{index + 1}. {track.name}</p>
            
            {/* PlayコンポーネントにトラックのpreviewUrlを渡す */}
            <Play previewUrl={track.previewUrl} />
          </li>
        ))}
      </ul>
  );
}

export default Playlist;
