import Lottie from "react-lottie";
import animationData from "./../assets/Cleaning_Loader.json";
import { useTranslation } from "react-i18next";
const ResoluteLoader = () => {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col h-full items-center justify-between py-10">
      <div>
        <p className="mt-10 text-24 text-black font-bold">
          {t("loadingPage.title")}{" "}
        </p>
        <p className="text-16 text-black">{t("loadingPage.subTitle")} </p>
      </div>
      <div className="mt-20">
        <Lottie options={defaultOptions} height={375} width={375} />
      </div>
      <p className="text-14 mt-20 text-gray-500 text-center md:w-96">
        {t("loadingPage.comment")}{" "}
      </p>
    </div>
  );
};

export default ResoluteLoader;
