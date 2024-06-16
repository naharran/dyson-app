import { useEffect } from "react";
import useInfoResults from "../../hooks/useGetInfoResults";
import InfoLoader from "./InfoLoader";
import ScanInfoContent from "./SacnInfoContent";
import { useScanDataContext } from "./scanContext";
import { ReadStatus } from "../type";
import useStatusCheck from "../../hooks/useStatusCheck";
import { useNavigate } from "react-router-dom";

const ScanInfo = () => {
  const { res, isLoading, refetch } = useInfoResults();
  const { dispatch } = useScanDataContext();
  const { mutate } = useStatusCheck();
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, [refetch]);
  useEffect(() => {
    if (res) {
      dispatch({
        type: "UPDATE_DATA",
        payload: { data: res.data, totalEmailScan: res.totalEmailScan },
      });
    }
  }, [dispatch, res]);
  const sendReadStatus = (duration: ReadStatus) => {
    mutate(duration, {
      onSuccess: () => navigate("/info"),
      onError: () => navigate("/info"),
    });
  };

  return (
    <div className="flex flex-col items-center ms-5 me-5 h-full ">
      <div className="w-[1200px] max-sm:w-full">
        {isLoading ? (
          <InfoLoader />
        ) : (
          <ScanInfoContent handelStarCleanup={sendReadStatus} />
        )}
      </div>
    </div>
  );
};

export default ScanInfo;
