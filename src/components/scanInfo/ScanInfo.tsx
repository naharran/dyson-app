import { useEffect } from "react";
import useInfoResults from "../../hooks/useGetInfoResults";
import InfoLoader from "./InfoLoader";
import ScanInfoContent from "./SacnInfoContent";
import { useScanDataContext } from "./scanContext";
import { ReadStatus } from "../type";
import useScanInfo from "../../hooks/useScaninfo";
import useStatusCheck from "../../hooks/useStatusCheck";

const ScanInfo = () => {
  const { res, isLoading } = useInfoResults();
  const { scan } = useScanInfo();
  const { dispatch } = useScanDataContext();
  const { mutate } = useStatusCheck();
  useEffect(() => {
    if (res) {
      dispatch({
        type: "UPDATE_DATA",
        payload: { data: res.data, totalEmailScan: res.totalEmailScan },
      });
    }
  }, [dispatch, res]);
  const sendReadStatus = () => {
    mutate(scan.duration, {
      onSuccess: (data) => console.log(data),
      onError: (err) => console.log(err),
    });
  };
  const setSliderDuration = (duration: ReadStatus): void => {
    dispatch({ type: "SET_SCAN_DURATION", payload: { duration } });
  };
  return (
    <div className="flex flex-col items-center ms-5 me-5 h-full">
      {isLoading ? (
        <InfoLoader />
      ) : (
        <ScanInfoContent
          onSlideChange={setSliderDuration}
          handelStarCleanup={sendReadStatus}
        />
      )}
    </div>
  );
};

export default ScanInfo;
