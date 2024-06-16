import { useTranslation } from "react-i18next";
import { ReadStatus } from "../type";
import { useState } from "react";
import ScanDescription from "./ScanDiscrption";
type ScanInfoContent = {
  handelStarCleanup: (duration: ReadStatus) => void;
};
const ScanInfoContent = ({ handelStarCleanup }: ScanInfoContent) => {
  const [, setIsDisabled] = useState(false);
  const { t } = useTranslation();

  const setButtonDisabled = (value: string) => {
    if (value === "4") {
      handelStarCleanup(ReadStatus.notInUse);
    }
    if (value === "1") {
      setOptionValue(value);
      handelStarCleanup(ReadStatus.Active);
    }
    setIsDisabled(true);
  };

  const [, setOptionValue] = useState("4");
  return (
    <>
      <div className="none max-sm:text-16 text-34 max-sm:ms-0 max-sm:me-0  ms-3 me-3 flex-col font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> {t("scanPage.title")} </p>
      </div>
      <div className="flex w-full">
        <ScanDescription onClick={setButtonDisabled} />
      </div>
    </>
  );
};

export default ScanInfoContent;
