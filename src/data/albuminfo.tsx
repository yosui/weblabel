type Album = {
    name: string;                    
    description?: string;     
    image: string;            
    torrent: string;         
    tracks: Track[];          
    artist: Artist[];
  };
  
  type Track = {
    name: string;             
    artist: string;           
    previewUrl: string;       
  };
  
  type Artist = {
    artist: string;           
    artistImg?: string;
    donation1: string;        
    donation2?: string;  
  }gi
  const AlbumInfos: Album[] = [
    {
      name: "Weblabel01",
      description: "",
      image: "../assets/image/track/weblabel01.png",
      torrent: "../assets/torrents/Weblabel01.torrent",
      tracks: [
        {
          name: "Pico Pico",
          artist: "Galaxy Semiconductor",
          previewUrl: "../assets/audio/pico_pico.mp3",
        },
      ],
      artist: [
        {
          artist: "Galaxy Semiconductor",           
          artistImg: "../assets/image/artist/galaxysemiconductor.png",
          donation1: "eth: 0x1dd010A59Ff93e47a7cd865803c6E6b72a757629",       
          donation2: "",  
        },
      ],
    },
  ];
  export default AlbumInfos;
