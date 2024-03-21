import { useTranslation } from "react-i18next";

const ScanMetaData = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col  mb-5 mt-5 text-24 font-Rubik text-center text-black">
      <p>{t("info.title")} </p>
      <p className="text-16">{t("info.subTitle")}</p>
    </div>
  );
};

export default ScanMetaData;
