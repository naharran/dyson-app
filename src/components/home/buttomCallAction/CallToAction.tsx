import { Button } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
type CallToActionProps = {
  onClick: () => void;
};
const CallToAction = ({ onClick }: CallToActionProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center mt-8  ms-4 me-4">
      <div className="text-43 max-sm:text-22 font-bold font-Rubik mb-1 text-black">
        <p>
          {t("home.callToAction.title")}
          <span className="text-textBlue">{t("home.callToAction.color")}</span>
        </p>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Button
          className="max-md:w-[88%] w-[33%]"
          variant={"round"}
          onClick={() => onClick()}
        >
          {t("home.callToAction.action")}{" "}
        </Button>
      </div>
      <div className="text-16 font-Rubik mt-8 text-center">
        <p className="text-greyText">{t("home.callToAction.helpText")}</p>
        <a
          className="text-textBlue"
          href="mailto:test@test.com"
          target="_blank"
        >
          {t("home.callToAction.support")}
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
