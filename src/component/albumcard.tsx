import React from 'react';
import { Route, Link } from 'react-router-dom';
import AlbumInfos from '../data/albuminfo';


type AlbumCardProps = {
    name: string;
    artist: string;
    image: string;
}


function AlbumCard(props: AlbumCardProps) {
  return (
    <>
    <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">
                    {props.name} | {props.artist}
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
           
            <img src={props.image} alt="Weblabel01 cover image" />
            <div className="button">
                <Link to={`/detail/${props.name}`} className="button-link"></Link>
                <button>Details</button>
            </div>
        </div> 
           
    </>

  );
}

export default AlbumCard;
