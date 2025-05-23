import React from "react";
import VideoPlayer from "../../components/VideoPlayer.jsx";

const VideoPlayerPage = () => {
  return (
    <div className="pt-20">
      <VideoPlayer
        videoUrl="https://outputchitram.s3.ap-south-1.amazonaws.com/kannada/Movies/VIMOCHANE/1080p/VIMOCHANE_1080.m3u8"
        maxResolution={1080} // Change based on user subscription
      />
    </div>
  );
};

export default VideoPlayerPage;
