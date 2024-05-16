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
    <div className="flex flex-col h-full items-center">
      <p className="mt-10 text-24 text-black">{t("loadingPage.title")} </p>
      <p className="text-16 text-black">{t("loadingPage.subTitle")} </p>
      <div className="mt-20">
        <Lottie options={defaultOptions} height={375} width={375} />
      </div>
    </div>
  );
};

export default ResoluteLoader;
