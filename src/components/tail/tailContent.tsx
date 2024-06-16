import { ReactNode } from "react";

type TailContentProps = {
  number: string;
  text: string;
  subText?: string;
};
const TailContent = ({ number, text, subText }: TailContentProps) => {
  const renderText = (): ReactNode => {
    if (subText) {
      return (
        <p>
          {" "}
          {text} <span className="text-textBlue">{number}</span> {subText}
        </p>
      );
    }
    return (
      <p>
        <span className="text-textBlue">{number}</span> {text}{" "}
      </p>
    );
  };
  return (
    <div className=" ml-2 flex flex-col justify-center text-[20px] font-Rubik text-black text-start">
      {renderText()}
    </div>
  );
};

export default TailContent;
