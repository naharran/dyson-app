import { useEffect, useState } from "react";

import Player from "./Player";
const VideoPlayerContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [player, setPlayer] = useState<any>();
  useEffect(() => {
    setPlayer(new window.YT.Player("player"));
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);
  return (
    <div className="flex w-full">
      <Player player={player} />
    </div>
  );
};

export default VideoPlayerContainer;
