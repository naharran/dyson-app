import { useEffect, useState } from "react";
type PlayerProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  player: any;
};
const Player = ({ player }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayerStateChange = (event: { data: string }) => {
    console.log(event);
    if (event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false);
      // Here you can add any action you want to perform after the video ends.
    }
  };
  const videoControllHandler = () => {
    console.log(player);
  };
  useEffect(() => {
    if (player) {
      player.addEventListener("onStateChange", onPlayerStateChange);
    }
  }, [player]);

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="bg-[url('/src/assets/mobile.svg')] relative pt-[185.6%] bg-contain bg-no-repeat w-full flex"
    >
      <iframe
        id="player"
        onClick={() => videoControllHandler()}
        className={`${isPlaying ? "visible" : "invisible"} absolute top-[2%] rounded-[6%] w-[82%] h-[96%] left-[9%]`}
        src="https://www.youtube.com/embed/5EnL2WXsxNQ?enablejsapi=1&autoplay=1&controls=0&&mute=1"
        allow="autoplay"
      ></iframe>
      {/* <video onEnded={onEnd} autoPlay={true} muted={true} controls height={"500"} width="250">
  <source src="src/assets/file_example.webm" type="video/webm" />
</video> */}
    </div>
  );
};

export default Player;
