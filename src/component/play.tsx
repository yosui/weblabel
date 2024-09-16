import React, { useRef } from 'react';
import AlbumInfos from '../data/albuminfo';

type PlayProps = {
  previewUrl: string;
};

const Play: React.FC<PlayProps> = ({ previewUrl }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      // Safariのためのエラーハンドリングを追加
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  };

  return (
    <> 
      <audio ref={audioRef}>
        <source src={AlbumInfos[0].tracks[0].previewUrl} type="audio/mpeg" />
        Sorry, your browser does not support.
      </audio>
      <div className="play" onClick={handlePlay}>
        <p>{'Play >'}</p>
      </div>
    </>
  );
};

export default Play;
