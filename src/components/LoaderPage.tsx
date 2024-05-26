import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { checkStatus } from "../service/api";
import { useNavigate } from "react-router-dom";
import animationData from "./../assets/Loader.json";
import { useTranslation } from "react-i18next";
import { loadingRemembers } from "./const";
import { Progress } from "@chakra-ui/react";

const LoaderPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loadingProgress, setLoadingProgress] = useState(1);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const renderTextRemembers = (): React.ReactNode => {
    return loadingRemembers.map((item, index) => (
      <p className="mb-2" key={`remb${index}`}>
        {t(item)}{" "}
      </p>
    ));
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const { idsLength, initLength } = await checkStatus();
        if (initLength !== idsLength) {
          const updateNumber = (idsLength / initLength) * 100;
          setLoadingProgress(updateNumber);
          setTimeout(() => fetchData(), 5000);
        } else {
          navigate("/scan");
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [navigate]);
  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-col items-center w-[1200px] max-sm:w-full mt-20">
        <p className="mt-10  text-34 max-sm:text-24 font-bold  text-black">
          {t("loadingPage.title")}{" "}
        </p>
        <p className="text-16 text-black">{t("loadingPage.subTitle")} </p>
        <div className="mt-10">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
        <p className="mt-10 mb-2 max-sm:text-22 text-24 font-bold ps-5 pe-5">
          {t("loadingPage.remembers")}
        </p>
        {renderTextRemembers()}
        <p className="mt-5 text-18 text-textBlue font-bold mb-2">
          {t("loadingPage.remembersList.rem3")}
        </p>
        <div className="flex w-[50%] ps-5 pe-5">
          <Progress className="w-full" size="sm" value={loadingProgress} />
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
