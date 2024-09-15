import React, { useRef } from 'react';
import AlbumInfos from '../data/albuminfo';

type PlayProps = {
  previewUrl: string;
};

const Play: React.FC<PlayProps> = ({ previewUrl }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <> 
      <audio ref={audioRef} src={AlbumInfos[0].tracks[0].previewUrl}></audio>
      <div class="play" onClick={handlePlay}>
        <p>{'Play >'}</p>
      </div>
    </>
  );
};

export default Play;


// need to change 19 Line