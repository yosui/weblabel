import React from 'react';
import { useParams } from 'react-router-dom';
import AlbumInfos from '../data/albuminfo';
import Artist from '../component/artist';
import Playlist from '../component/playlist';

const AlbumDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const album = AlbumInfos.find(album => album.name === name);

  if (!album) {
    return <p>Album not found</p>;
  }

  return (
    <>
    <section id="track-details">
      <div className="album">
        <div className="track-item">
          <p>{album.name} - {album.artist[0].artist}</p>
          <img src={album.image} alt={`${album.name} cover image`} />

          <div className="download-item">
            <a href={album.torrent}>Download (Torrent)</a> 
          </div>
        </div>    

        <div className="other-tracks">

        <Playlist albumName={album.name} />

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
