import TailIcon from "./TailIcon";
import TailContent from "./tailContent";

type TailContainerProps = {
  imgSrc: string;
  number: string;
  text: string;
};

const TailContainer = ({ imgSrc, number, text }: TailContainerProps) => {
  return (
    <div className="flex shadow-lg justify-start mt-10 rounded-b-2xl">
      <div className="flex py-2.5 ms-8">
        <TailIcon src={imgSrc} />
        <TailContent number={number} text={text} />
      </div>
    </div>
  );
};

export default TailContainer;
