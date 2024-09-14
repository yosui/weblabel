import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
      <div className="window" style={{ maxWidth: '2500px' }}>
        <div className="title-bar">
          <div className="title-bar-text">About</div>
        </div>
        <div className="window-body">
          <ul>
            <li>
              Music has been enjoyed by people since ancient times. Even before Rave was categorized as Rave, there were customs in various places where someone would play music and people would gather to enjoy it. The right to enjoy music is fundamentally available to everyone, and music can be considered a public good.
              <br /><br /> 
              However, in modern times, it is most common to upload music to some kind of web service and enjoy it on that platform. All information about music is stored in a database maintained by some organization. This means that music considered good by the platform becomes more likely to be heard, while music that is not featured becomes less likely to be heard. Although there is inherently no superiority or inferiority in music genres, this tendency creates a disparity between the music artists want to create and the music that is likely to be featured.
            </li>
            <br />
            <li>
              To enable artists to express what they absolutely want to express without being subject to arbitrary evaluation, Weblabel will not provide any music to centralized streaming services. Instead, it will make music directly available for free download from the Weblabel website. Furthermore, we will primarily provide our information through decentralized networks such as Ethereum, Torrent, and IPFS, or through privacy-conscious services.
            </li>
          </ul>
        </div>
      </div>

      <div className="window" style={{ maxWidth: '2500px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Policy</div>
        </div>
        <div className="window-body">
          <ul>
            <li>1. Weblabel strives to protect music as a public good while simultaneously fostering the success of artists.</li>
            <li>2. Weblabel doesn't use centralized or privacy-unfriendly SNS.</li>
            <li>3. Weblabel doesn't provide music to streaming services that use centralized databases.</li>
          </ul>
        </div>
      </div>

      <div className="window" style={{ maxWidth: '2500px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Stack</div>
        </div>
        <div className="window-body">
          <ul>
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>IPFS</li>
            <li>Torrent</li>
            <li>eth.limo</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
