import { useState } from "react";
import FreshStart from "./FreshStart";
import LightClean from "./LightClean";
type ScanDescriptionProps = {
  onClick: (value: string) => void;
};
const ScanDescription = ({ onClick }: ScanDescriptionProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const btnClick = (value: string) => {
    setIsDisabled(true);
    onClick(value);
  };
  return (
    <div className="flex justify-between max-sm:flex-col max-sm:items-center">
      <div className="w-[45%] shadow-xl max-sm:w-[80%] max-sm: mb-5">
        <LightClean onClick={btnClick} isDisabled={isDisabled} />
      </div>
      <div className="w-[45%] shadow-xl max-sm:w-[80%] max-sm: mb-5">
        <FreshStart onClick={btnClick} isDisabled={isDisabled} />{" "}
      </div>
    </div>
  );
};

export default ScanDescription;
