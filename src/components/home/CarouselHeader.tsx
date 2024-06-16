import { useTranslation } from "react-i18next";

const CarouselHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="max-sm:text-22 flex text-30 font-bold justify-center mt-10 mb-10 flex-col items-center font-Rubik">
      <p>{t("home.carouselHeader.title")}</p>
      <p>
        <span>{t("home.carouselHeader.preColor")}</span>
        <span className="text-textBlue ms-3 mr-3">
          {t("home.carouselHeader.color")}
        </span>
        <span>{t("home.carouselHeader.titleEnd")}</span>
      </p>
    </div>
  );
};

export default CarouselHeader;
