/* eslint-disable react-hooks/exhaustive-deps */

import ScanMetaData from "./ScanMetaData";
import useInfoResults from "../../hooks/useGetInfoResults";
import { useEffect, useState } from "react";
import { ScanResultsCalc } from "../type";

import ResoluteLoader from "../ResluteLodaer";
import { t } from "i18next";
import TailContainer from "../tail/tailContainer";
import { ReactComponent as Trash } from "@assets/Icon trash.svg";
import { ReactComponent as Icon2 } from "@assets/Icon_2.svg";

import { formatSize } from "../scanInfo/scanUtils";
import UnsubscribeList from "./UnsubscribeList";

const Info = () => {
  const { res, isLoading, refetch } = useInfoResults(true);
  const [newsletterData, setNewsletterData] = useState<ScanResultsCalc>();
  const [dataReady, setDataReady] = useState(false);
  useEffect(() => {
    if (!res) {
      refetch();
    }
    if (res) {
      const clearedSize = res?.emailsDeleted
        ? formatSize(res?.emailsDeleted * 100)
        : "0MB";
      // const updateNews = removeDuplicates(newsletterData?.data?? [], res.data);
      setNewsletterData({ ...res, clearedSize });
    }
    const interval = setInterval(() => {
      if (!res) {
        return;
      }
      const { newslettersProcessed, totalNewsletterProcessed, emailsDeleted } =
        res;
      if (
        newslettersProcessed === totalNewsletterProcessed &&
        emailsDeleted > 0
      ) {
        setDataReady(true);
        refetch();
        clearInterval(interval);
      } else {
        refetch();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [res]);
  if (isLoading) return <ResoluteLoader />;
  if (!dataReady) return <ResoluteLoader />;
  return (
    <div className="flex justify-center">
      <div className="flex w-[1200px] flex-col items-center ms-5 me-5 h-full">
        <ScanMetaData />
        <div className="flex flex-col max-sm:w-full w-[70%] mt-5">
          <TailContainer
            Icon={Trash}
            useStyle={"flex shadow-xl pt-[20px] pb-[20px] mb-20"}
            number={newsletterData?.emailsDeleted?.toString() ?? "0"}
            text={t("info.deleted")}
            size={35}
          />
          <TailContainer
            useStyle={"flex shadow-xl pt-[20px] pb-[20px] mb-10"}
            Icon={Icon2}
            number={newsletterData?.clearedSize ?? "0MB"}
            text={t("info.cleared")}
            size={35}
          />
          <UnsubscribeList
            totalNewsLettersFound={newsletterData?.totalNewsLettersFound ?? 0}
            data={newsletterData?.data ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
