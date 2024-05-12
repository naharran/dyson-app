import { Button, RadioGroup } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useScanInfo from "../../hooks/useScaninfo";
import { ReadStatus } from "../type";
import { useState } from "react";
import ScanOptionTail from "./scanOptionTail";
import ScanDetails from "./ScanDetails";
type ScanInfoContent = {
  onSlideChange: (duration: ReadStatus) => void;
  handelStarCleanup: () => void;
};
const ScanInfoContent = ({
  onSlideChange,
  handelStarCleanup,
}: ScanInfoContent) => {
  const { scan } = useScanInfo();
  const [isDisabled, setIsDisabled] = useState(false);
  const { t } = useTranslation();
  const handleSliderChange = (value: string): void => {
    if (value === "4") {
      setOptionValue(value);
      onSlideChange(ReadStatus.notInUse);
    }
    if (value === "3") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Neglected);
    }
    if (value === "2") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Inactive);
    }
    if (value === "1") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Active);
    }
  };
  const setButtonDisabled = () => {
    setIsDisabled(true);
    handelStarCleanup();
  };

  const [optionValue, setOptionValue] = useState("4");
  return (
    <>
      <div className="flex max-sm:text-24 text-34  ms-3 me-3 flex-col items-center justify-center text-16 font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> {t("scanPage.title")} </p>
      </div>
      <div className="flex items-center w-full flex-col">
        <RadioGroup
          className="flex flex-col items-center w-full"
          onChange={handleSliderChange}
          value={optionValue}
        >
          <div
            onClick={() => handleSliderChange("1")}
            className="w-[50%] max-sm:w-full"
          >
            <ScanOptionTail index={1} />
            {optionValue === "1" && (
              <ScanDetails
                totalNewsLetterMail={scan?.totalNewsLetterMail ?? 0}
                totalEmailSize={scan?.totalEmailSize ?? 0}
                totalNewsLetterFound={scan?.totalNewsLetterFound ?? "0"}
              />
            )}
          </div>
          <div
            onClick={() => handleSliderChange("2")}
            className="w-[50%] max-sm:w-full"
          >
            <ScanOptionTail index={2} />
            {optionValue === "2" && (
              <ScanDetails
                totalNewsLetterMail={scan?.totalNewsLetterMail ?? 0}
                totalEmailSize={scan?.totalEmailSize ?? 0}
                totalNewsLetterFound={scan?.totalNewsLetterFound ?? "0"}
              />
            )}
          </div>
          <div
            onClick={() => handleSliderChange("3")}
            className="w-[50%] max-sm:w-full"
          >
            <ScanOptionTail index={3} />
            {optionValue === "3" && (
              <ScanDetails
                totalNewsLetterMail={scan?.totalNewsLetterMail ?? 0}
                totalEmailSize={scan?.totalEmailSize ?? 0}
                totalNewsLetterFound={scan?.totalNewsLetterFound ?? "0"}
              />
            )}
          </div>
          <div
            onClick={() => handleSliderChange("4")}
            className="w-[50%] max-sm:w-full"
          >
            <ScanOptionTail index={4} />
            {optionValue === "4" && (
              <ScanDetails
                totalNewsLetterMail={scan?.totalNewsLetterMail ?? 0}
                totalEmailSize={scan?.totalEmailSize ?? 0}
                totalNewsLetterFound={scan?.totalNewsLetterFound ?? "0"}
              />
            )}
          </div>
        </RadioGroup>
      </div>

      <div className="w-full  mt-5 flex grow flex-col-reverse items-center">
        <Button
          width={"80"}
          variant={"round"}
          onClick={() => setButtonDisabled()}
          isDisabled={isDisabled}
        >
          Clean my inbox
        </Button>
      </div>
    </>
  );
};

export default ScanInfoContent;
