import React from "react";
import { factList } from "./FactTailConst";
import FactTail from "./FactTail";
import { useTranslation } from "react-i18next";

const FactList = () => {
  const { t } = useTranslation();
  const createFactTail = (): React.ReactNode => {
    return factList.map((item, index) => (
      <FactTail
        key={`fact${index}`}
        Icon={item.Icon}
        title={t(item.title)}
        text={t(item.text)}
      />
    ));
  };
  return (
    <div className="flex flex-col items-center">
      <p className="font-Rubik text-43 font-bold max-sm:text-22 mb-10">
        {" "}
        <span>{t("home.factList.title")} </span>
        <span className="text-textBlue ms-3 mr-3">
          {t("home.factList.titleColor")}
        </span>{" "}
        <span>{t("home.factList.titleEnd")}</span>
      </p>
      <div className="flex max-md:flex-col items-start ms-8 me-8 mt-2">
        {createFactTail()}
      </div>
    </div>
  );
};

export default FactList;
