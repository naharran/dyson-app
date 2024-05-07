import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
type ContentProps = {
  onClick: () => void;
};
const Content = ({ onClick }: ContentProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start max-sm:items-center">
      <div className="max-sm:w-[90%] w-[68%] max-sm:text-43  text-48 flex text-start max-sm:text-center justify-center font-Rubik mb-1 text-black">
        <span>
          {t("home.hederList.title")}
          <span className="text-textBlue ms-3 text-48 font-Rubik">
            {t("home.hederList.titleColor")}{" "}
          </span>
        </span>
      </div>
      <div className="py-4 ps-5 pe-5 text-34 mb-5 max-sm:text-22">
        <p>{t("home.hederList.bolt1")}</p>
        <p>{t("home.hederList.bolt2")}</p>
        <p>{t("home.hederList.bolt3")}</p>
      </div>
      <div className="flex pl-10 pr-10 w-full">
        <Button
          className="max-md:w-[88%] w-[100%]"
          variant={"round"}
          onClick={onClick}
        >
          {t("home.hederList.btn")}
        </Button>
      </div>
    </div>
  );
};

export default Content;
