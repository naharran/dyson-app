import { SvgIcon } from "../type";
import TailContent from "./tailContent";

export type TailContainerProps = {
  Icon: SvgIcon;
  number: string;
  text: string;
  subText?: string;
};

const TailContainer = ({ Icon, number, text, subText }: TailContainerProps) => {
  return (
    <div className="flex shadow-lg justify-start mt-10 rounded-b-2xl">
      <div className="flex py-2.5 ms-8">
        <Icon />
        <TailContent number={number} text={text} subText={subText} />
      </div>
    </div>
  );
};

export default TailContainer;
