import VideoPlayerContainer from "../videoPlayer/VideoPlayerContainer";
import Content from "./Content";
import CallToAction from "./buttomCallAction/CallToAction";
import CarouselTest from "./testimoniale/CarouselTest";
import CarouselHeader from "./CarouselHeader";
import FactList from "./FactList";

type HomeProps = {
  onClick: () => void;
};
const Home = ({ onClick }: HomeProps) => {
  return (
    <div className="flex flex-col  justify-center mt-20">
      <div className="flex max-sm:flex-col">
        <Content onClick={onClick} />
        <div className="flex w-[50%] max-sm:w-full max-sm:mt-10">
          <VideoPlayerContainer />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <FactList />
        <div className="flex flex-col">
          <CarouselHeader />
          <CarouselTest />
        </div>
        <div className="flex flex-col items-start"></div>
        <CallToAction onClick={onClick} />
      </div>
    </div>
  );
};

export default Home;
