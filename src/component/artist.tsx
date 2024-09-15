import React from 'react';
import AlbumCard from './albumcard';
import AlbumInfos from '../data/albuminfo'

type ArtistProps = {
    artist: string;
    artistImg?: string;
    donation1?: string;        
    donation2?: string;
}

function Artist(props: ArtistProps) {

  return (
                <div className="artist">
                    <div className="artist-info">
                            <img src={props.artistImg} />
                        <div className="artist-name-donation">
                            <p>{props.artist}</p>
                            <div className='donation'>
                                <ul>Donation
                                    <li>{props.donation1}</li>
                                    <li>{props.donation2}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div> 
            
  );
}

export default Artist;
