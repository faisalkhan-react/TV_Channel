import React from "react";
import VideoPlayer from "../../components/VideoPlayer.jsx";

const VideoPlayerPage = () => {
  return (
    <div className="pt-20">
      <VideoPlayer
        videoUrl="https://dfgtyujjojolkj.s3.ap-south-1.amazonaws.com/output/folder.m3u8"
        maxResolution={1080} // Change based on user subscription
      />
    </div>
  );
};

export default VideoPlayerPage;
