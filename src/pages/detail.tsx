import React from 'react';
import { useParams } from 'react-router-dom';
import AlbumInfos from '../data/albuminfo';
import Artist from '../component/artist';
import Playlist from '../component/playlist';  // Playlistをインポート

const AlbumDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  // AlbumInfosからアルバム名が一致するアルバムを取得
  const album = AlbumInfos.find(album => album.name === name);

  // アルバムが見つからない場合のエラーハンドリング
  if (!album) {
    return <p>Album not found</p>;
  }

  return (
    <>"
    <section id="track-details">
      <div className="album">
        <div className="track-item">
          {/* アルバム名とアーティスト名を動的に表示 */}
          <p>{album.name} - {album.artist[0].artist}</p>
          {/* アルバムのカバー画像を動的に表示 */}
          <img src={album.image} alt={`${album.name} cover image`} />

          <div className="download-item">
            <a href={album.torrent}>Download (Torrent)</a> 
          </div>
        </div>    

        <div className="other-tracks">
        {/* Playlistコンポーネントを追加 */}
        <Playlist albumName={album.name} />

        {/* Artistコンポーネントにアーティスト情報を渡す */}
        <Artist 
          artistImg={album.artist[0].artistImg} 
          artist={album.artist[0].artist}
          donation1={album.artist[0].donation1}
        /> 
        </div>               
      </div>
      </section>
    </>
  );
};

export default AlbumDetail;
