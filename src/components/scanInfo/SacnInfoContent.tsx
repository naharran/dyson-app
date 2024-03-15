import { Button } from "@chakra-ui/react";
import ReSlider from "../infra/ReSlider";
import ScanTitle from "./ScanTiltle";
import TailContainer from "../tail/tailContainer";
import { ReactComponent as Trash } from "@assets/Icon trash.svg";
import { ReactComponent as Icon2 } from "@assets/Icon_2.svg";
import { ReactComponent as Icon3 } from "@assets/Icon_3.svg";
import { useTranslation } from "react-i18next";
type ScanInfoContent = {
  totalEmailNumber: string;
  totalNewsLetterEmail: string;
  totalEmailSize: string;
  totalNewsLetter: string;
};
const ScanInfoContent = ({
  totalEmailNumber,
  totalNewsLetter,
  totalEmailSize,
  totalNewsLetterEmail,
}: ScanInfoContent) => {
  const { t } = useTranslation();
  return (
    <>
      <ScanTitle emailNumber={totalEmailNumber} />
      <div className="flex ms-3 me-3 flex-col items-center justify-center text-16 font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> Choose what you’d like to delete. </p>
        <ReSlider />
      </div>
      <div className="flex flex-col w-full">
        <TailContainer
          Icon={Trash}
          number={totalNewsLetterEmail}
          text={t("scanPage.tails.trash.text")}
        />
        <TailContainer
          Icon={Icon2}
          number={totalEmailSize}
          text={t("scanPage.tails.space.text")}
          subText={t("scanPage.tails.space.subText")}
        />
        <TailContainer
          Icon={Icon3}
          number={totalNewsLetter}
          text={t("scanPage.tails.mail.text")}
          subText={t("scanPage.tails.mail.subText")}
        />
      </div>

      <div className="w-full ms-3 me-3 flex grow flex-col-reverse items-center">
        <Button width={"88%"} variant={"round"} onClick={() => console.log()}>
          Clean my inbox
        </Button>
      </div>
    </>
  );
};

export default ScanInfoContent;
