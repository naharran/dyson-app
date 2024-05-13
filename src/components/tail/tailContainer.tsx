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
    ? "flex shadow-sm justify-start mt-2 rounded-b-2xl"
    : "";
  return (
    <div className={style}>
      <div className="flex py-2.5 ms-8">
        <Icon width={25} height={25} />
        <TailContent number={number} text={text} subText={subText} />
      </div>
    </div>
  );
};

export default TailContainer;
