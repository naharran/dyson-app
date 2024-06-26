import { useQuery } from "react-query";
import { getResult } from "../service/api";
import { ScanResultsProps } from "../components/type";
import useScanInfo from "./useScaninfo";
function useInfoResults(isScan = false) {
  const { scan } = useScanInfo();
  console.log(scan.duration);
  const { data, error, isLoading, refetch } = useQuery<ScanResultsProps>(
    ["uniqueKeyForGetData", scan.duration, isScan],
    () => getResult(scan.duration, isScan),
    { refetchOnWindowFocus: false, refetchOnMount: false, enabled: false },
  );

  return { res: data, error, isLoading, refetch };
}

export default useInfoResults;
