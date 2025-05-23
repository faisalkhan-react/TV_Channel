import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ videoUrl, maxResolution }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [levels, setLevels] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(-1); // -1 means auto

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;

      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Filter allowed levels based on subscription
        const allowed = hls.levels.filter((level) => {
          const resolution = level.height;
          return resolution <= maxResolution;
        });

        setLevels(allowed);
        setCurrentLevel(-1); // Default to auto
      });

      hls.on(Hls.Events.ERROR, function (event, data) {
        console.error("HLS error:", data);
      });

      return () => {
        hls.destroy();
      };
    }
  }, [videoUrl, maxResolution]);

  const handleLevelChange = (e) => {
    const selectedIndex = parseInt(e.target.value);
    setCurrentLevel(selectedIndex);
    hlsRef.current.currentLevel = selectedIndex;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <video ref={videoRef} controls className="w-full h-[500px]" />
      {levels.length > 0 && (
        <div className="mt-4">
          <label className="text-white">Select Quality:</label>
          <select
            value={currentLevel}
            onChange={handleLevelChange}
            className="ml-2 px-2 py-1 rounded"
          >
            <option value={-1}>Auto</option>
            {levels.map((level, index) => (
              <option key={index} value={index}>
                {level.height}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
