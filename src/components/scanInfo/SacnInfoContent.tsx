import { Button } from "@chakra-ui/react";
import ReSlider from "../infra/ReSlider";
import ScanTitle from "./ScanTiltle";
import TailContainer from "../tail/tailContainer";
import { ReactComponent as Trash } from "@assets/Icon trash.svg";
import { ReactComponent as Icon2 } from "@assets/Icon_2.svg";
import { ReactComponent as Icon3 } from "@assets/Icon_3.svg";
import { useTranslation } from "react-i18next";
import useScanInfo from "../../hooks/useScaninfo";
import { ReadStatus } from "../type";
import { useState } from "react";
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
  const handleSliderChange = (value: number): void => {
    if (value === 0) {
      onSlideChange(ReadStatus.notInUse);
    }
    if (value > 0 && value <= 25) {
      onSlideChange(ReadStatus.Neglected);
    }
    if (value > 25 && value <= 50) {
      onSlideChange(ReadStatus.Inactive);
    }
    if (value > 50) {
      onSlideChange(ReadStatus.Active);
    }
  };
  const setButtonDisabled = () => {
    setIsDisabled(true);
    handelStarCleanup();
  };
  return (
    <>
      <ScanTitle emailNumber={scan?.totalEmailScan.toString()} />
      <div className="flex ms-3 me-3 flex-col items-center justify-center text-16 font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> Choose what you’d like to delete. </p>
        <ReSlider onSliderChange={handleSliderChange} />
      </div>
      <div className="flex flex-col w-full">
        <TailContainer
          Icon={Trash}
          number={scan?.totalNewsLetterMail.toString()}
          text={t("scanPage.tails.trash.text")}
        />
        <TailContainer
          Icon={Icon2}
          number={scan.totalEmailSize}
          text={t("scanPage.tails.space.text")}
          subText={t("scanPage.tails.space.subText")}
        />
        <TailContainer
          Icon={Icon3}
          number={scan.totalNewsLetterFound.toString()}
          text={t("scanPage.tails.mail.text")}
          subText={t("scanPage.tails.mail.subText")}
        />
      </div>

      <div className="w-full ms-3 me-3 flex grow flex-col-reverse items-center">
        <Button
          width={"88%"}
          variant={"round"}
          onClick={() => setButtonDisabled()}
          disabled={isDisabled}
        >
          Clean my inbox
        </Button>
      </div>
    </>
  );
};

export default ScanInfoContent;
