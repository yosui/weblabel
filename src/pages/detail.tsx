import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AlbumProps } from '../component/props'; // props.tsxからAlbumPropsをインポート

const Albumdetail: React.FC<AlbumProps> = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <section id="track-details">
        <div className="album">
          <div className="track-item">
            <p>{props.name} - {props.artist}</p>
            <img src={props.image} alt={`${props.name} cover image`} />

            <div className="download-item">
              <a href={props.torrent}>Download (Torrent)</a>
            </div>
          </div>

          <div className="other-tracks">
            <ul>
              <li>
                <p>1. {props.track1Name}</p>
                <audio ref={audioRef} src={props.track1Preview} type="audio/mpeg"></audio>
                <div className="play-button" onClick={handlePlay}>
                  {isPlaying ? 'Pause ||' : 'Play >'}
                </div>
              </li>
              {/* 残りのトラック情報をpropsで動的に表示 */}
              {props.track2Name && (
                <li>
                  <p>2. {props.track2Name}</p>
                  <audio src={props.track2Preview} type="audio/mpeg"></audio>
                  <div className="play-button">Play ></div>
                </li>
              )}
              {props.track3Name && (
                <li>
                  <p>3. {props.track3Name}</p>
                  <audio src={props.track3Preview} type="audio/mpeg"></audio>
                  <div className="play-button">Play ></div>
                </li>
              )}
              {props.track4Name && (
                <li>
                  <p>4. {props.track4Name}</p>
                  <audio src={props.track4Preview} type="audio/mpeg"></audio>
                  <div className="play-button">Play ></div>
                </li>
              )}
              {props.track5Name && (
                <li>
                  <p>5. {props.track5Name}</p>
                  <audio src={props.track5Preview} type="audio/mpeg"></audio>
                  <div className="play-button">Play ></div>
                </li>
              )}
            </ul>
          </div>

          <div className="artist">
            <div className="artist-info">
              <img src={props.artistImg} alt={`${props.artist} image`} />
              <p>{props.artist}</p>
            </div>
            <div className="donation">
              <ul>
                <li>Donation</li>
                <li>{props.donation1}</li>
                {props.donation2 && <li>{props.donation2}</li>}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Albumdetail;
