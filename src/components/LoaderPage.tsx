import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { checkStatus } from "../service/api";
import { useNavigate } from "react-router-dom";
import animationData from "./../assets/Loader.json";
import { useTranslation } from "react-i18next";
import { loadingRemembers } from "./const";
import { Progress } from "@chakra-ui/react";

const LoaderPage = () => {
  const naviget = useNavigate();
  const { t } = useTranslation();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const renderTextRemembers = (): React.ReactNode => {
    const list: React.ReactNode[] = [];

    loadingRemembers.forEach((item, index) => {
      list.push(
        <p className="mb-2" key={`remb${index}`}>
          {t(item)}{" "}
        </p>,
      );
    });
    return list;
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
          naviget("/scan");
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [naviget]);
  return (
    <div className="flex flex-col h-full items-center">
      <p className="mt-10 text-24 text-black">{t("loadingPage.title")} </p>
      <p className="text-16 text-black">{t("loadingPage.subTitle")} </p>
      <div className="mt-10">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
      <div className="flex w-full ps-5 pe-5">
        <Progress className="w-full" size="sm" value={loadingProgress} />
      </div>
      <p className="mt-10 mb-2 text-base ps-5 pe-5">
        {t("loadingPage.remembers")}
      </p>

      {renderTextRemembers()}
    </div>
  );
};

export default LoaderPage;
