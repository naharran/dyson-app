import { useScanDataContext } from "../components/scanInfo/scanContext";

const useScanInfo = () => {
  const { state } = useScanDataContext();
  return { scan: state };
};
export default useScanInfo;
