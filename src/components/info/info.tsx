/* eslint-disable react-hooks/exhaustive-deps */
import NewsLetterList from "./NewsLetterList";
import ScanMetaData from "./ScanMetaData";
import useInfoResults from "../../hooks/useGetInfoResults";
import { useEffect, useState } from "react";
import { NewsletterInfo } from "../type";
import { removeDuplicates } from "./infoUtils";

const Info = () => {
  const { res, error, isLoading, refetch } = useInfoResults();
  const [newsletterData, setNewsletterData] = useState<NewsletterInfo[]>([]);
  useEffect(() => {
    if (res) {
      const updateNews = removeDuplicates(newsletterData, res.data);
      setNewsletterData(updateNews);
    }
    setTimeout(() => {
      if (res?.newslettersProcessed !== res?.totalNewsLettersFound) {
        refetch();
      }
    }, 5000);
  }, [res]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className="flex flex-col items-center">
      <ScanMetaData
        totalNewsLettersFound={res?.totalNewsLettersFound ?? 0}
        emailsDeleted={res?.emailsDeleted ?? 0}
        freeSize={99}
      />
      <NewsLetterList data={newsletterData ?? []} />
    </div>
  );
};

export default Info;
