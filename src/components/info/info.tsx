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
      if (
        res?.newslettersProcessed &&
        res?.totalNewsletterProcessed &&
        res?.newslettersProcessed < res?.totalNewsletterProcessed
      ) {
        refetch();
      } else {
        setDataReady(true);
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [res]);
  if (isLoading) return <ResoluteLoader />;
  if (!dataReady) return <ResoluteLoader />;
  return (
    <div className="flex flex-col items-center ms-5 me-5 h-full">
      <ScanMetaData />
      <div className="flex flex-col w-full">
        <TailContainer
          Icon={Trash}
          number={newsletterData?.emailsDeleted?.toString() ?? "0"}
          text={t("info.deleted")}
        />
        <TailContainer
          Icon={Icon2}
          number={newsletterData?.clearedSize ?? "0MB"}
          text={t("info.cleared")}
        />
        <UnsubscribeList
          totalNewsLettersFound={newsletterData?.totalNewsLettersFound ?? 0}
          data={newsletterData?.data ?? []}
        />
      </div>
    </div>
  );
};

export default Info;
