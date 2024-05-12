import { SvgIcon } from "../type";
import TailContent from "./tailContent";

export type TailContainerProps = {
  Icon: SvgIcon;
  number: string;
  text: string;
  subText?: string;
  useStyle?: boolean;
};

const TailContainer = ({
  Icon,
  number,
  text,
  subText,
  useStyle = true,
}: TailContainerProps) => {
  const style = useStyle
    ? "flex shadow-lg justify-start mt-5 rounded-b-2xl"
    : "";
  return (
    <div className={style}>
      <div className="flex py-2.5 ms-8">
        <Icon width={35} height={35} />
        <TailContent number={number} text={text} subText={subText} />
      </div>
    </div>
  );
};

export default TailContainer;
