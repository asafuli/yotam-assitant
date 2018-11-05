import React, { useState } from "react";

const YTPlayer = () => {
  let [src, setSrc] = useState("");

  return (
    <iframe
      id="yt-player"
      width="640"
      height="360"
      src={src}
      enablejsapi="1"
      title="yt-player"
      border="solid 4px #37474F"
      allow="autoplay"
    />
  );
};

export default YTPlayer;
