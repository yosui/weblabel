type Album = {
    name: string;                    
    description?: string;     
    image: string;            
    torrent: string;
    mp3: string;       
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
  }
  
  const AlbumInfos: Album[] = [
    {
      name: "Weblabel01",
      description: "",
      image: "/assets/image/track/weblabel01.png",
      torrent: "/assets/torrents/Weblabel01.torrent",
      mp3: "https://gateway.pinata.cloud/ipfs/bafybeiefoclpo3b73ansgtwzhg5nupgcvgznppoofozpn7nvlixrp3lmzi?filename=PicoPico-GalaxySemiconductor.mp3&download=true",
      tracks: [
        {
          name: "Pico Pico",
          artist: "Galaxy Semiconductor",
          previewUrl: "/assets/preview/pico_pico.mp3",
        },
      ],
      artist: [
        {
          artist: "Galaxy Semiconductor",           
          artistImg: "/assets/image/artist/galaxysemiconductor.png",
          donation1: "eth: 0x1dd010A59Ff93e47a7cd865803c6E6b72a757629",       
          donation2: "",  
        },
      ],
    },
  ];
  export default AlbumInfos;
