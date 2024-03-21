import React from "react";
import VideoPlayerContainer from "../videoPlayer/VideoPlayerContainer";
import Content from "./Content";
import FactTail from "./FactTail";
import { factList } from "./FactTailConst";
import { useTranslation } from "react-i18next";
import CallToAction from "./buttomCallAction/CallToAction";

type HomeProps = {
  onClick: () => void;
};
const Home = ({ onClick }: HomeProps) => {
  const { t } = useTranslation();
  const createFactTail = (): React.ReactNode => {
    const fact: React.ReactNode[] = [];
    factList.forEach((item, index) => {
      fact.push(
        <FactTail
          key={`fact${index}`}
          Icon={item.Icon}
          title={t(item.title)}
          text={t(item.text)}
        />,
      );
    });
    return fact;
  };
  return (
    <div className="flex flex-col justify-center mt-20">
      <Content onClick={onClick} />
      <div className="flex flex-col justify-center mt-10">
        <div className="flex justify-evenly mb-10 w-full">
          <VideoPlayerContainer />
        </div>
        <div className="flex flex-col items-start ms-8 me-8">
          {createFactTail()}
        </div>
        <div className="flex flex-col items-start"></div>
        <CallToAction onClick={onClick} />
      </div>
    </div>
  );
};

export default Home;
