type Album = {
    name: string;             
    artist: string;           
    artistImg?: string;       
    description?: string;     
    image: string;            
    torrent: string;         
    tracks: Track[];          
    donation1: string;        
    donation2?: string;       
  };
  
  type Track = {
    name: string;             
    artist: string;           
    previewUrl: string;       
  };
  
  const AlbumInfos: Album[] = [
    {
      name: "Weblabel01",
      artist: "Galaxy Semiconductor",
      artistImg: "../assets/image/artist/galaxysemiconductor.png",
      description: "",
      image: "assets/image/track/weblabel01.png",
      torrent: "../torrents/Weblabel01.torrent",
      tracks: [
        {
          name: "Pico Pico",
          artist: "Galaxy Semiconductor",
          previewUrl: "../assets/audio/pico_pico.mp3",
        },
        {
          name: "Track 2",
          artist: "Galaxy Semiconductor",
          previewUrl: "../assets/audio/track2.mp3",
        },
      ],
      donation1: "eth: 0x1dd010A59Ff93e47a7cd865803c6E6b72a757629",
    },
  ];
  export default AlbumInfos;
