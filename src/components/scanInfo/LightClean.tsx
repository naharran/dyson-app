import { useTranslation } from "react-i18next";
import { ReactComponent as Light } from "./../../assets/light_clean.svg";

import { Button } from "@chakra-ui/react";
type ScanDescriptionProps = {
  onClick: (value: string) => void;
  isDisabled: boolean;
};
const LightClean = ({ onClick, isDisabled }: ScanDescriptionProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full tailwind-border font-Inter flex-col px-12 pb-4 pt-4">
      <div className="flex justify-between">
        <Light />
      </div>
      <div className=" flex flex-col mb-8 pt-4 max-sm:mb-4">
        <p className="text-24 font-bold">{t("scanPage.lightClean.title")} </p>
        <p className="text-16 text-greyText">
          {" "}
          {t("scanPage.lightClean.subTitle")}
        </p>
      </div>
      <div className="text-16 mb-">{t("scanPage.lightClean.discription")}</div>
      <div className="w-full  mt-5 flex grow flex-col-reverse items-center">
        <Button
          width={"80"}
          variant={"round"}
          onClick={() => onClick("4")}
          className="text-24"
          color="#7C5CFF"
          border={"1px solid"}
          padding={"2rem"}
          background={"white"}
          disabled={isDisabled}
        >
          {t("scanPage.lightClean.btn")}
        </Button>
      </div>
    </div>
  );
};

export default LightClean;
