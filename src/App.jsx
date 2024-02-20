import React from 'react';

// This imports the functional component from the previous sample.
import VideoJS from './components/VideoJS'

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true, // Ensure autoplay works in most browsers
    sources: [{
      src: '/vid.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
      videojs.play();
    });
  };

  return (
    <>
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    <div className="absolute top-0 text-[#000] z-50 w-screen h-screen">
      <h3 className="text-2xl">Hi</h3>
      </div>
    </>
 
      
   
   
  );
}
export default App;