import React from 'react';

const VideoPlayer = ({ videoWidth }: { videoWidth?: string }) => {
  return (
    <div className={videoWidth ? videoWidth : ""}> 
      <video
        src="../../src/assets/video.mp4"  // Replace with your video URL
        width="100%"    // Adjust video size
        height="auto"
        autoPlay={true} // Automatically play video
        loop={true}     // Loop video for continuous playback
        controls={true} // Show video controls (play, pause, etc.)
      />
    </div>
  );
};

export default VideoPlayer;
